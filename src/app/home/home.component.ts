import { Component } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

import { TaskEnum } from './home.enum';
import { NgFor, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [DialogModule, NgFor, NgIf],
})
export class HomeComponent {
  constructor(public dialog: Dialog, private toastrService: ToastrService) {}
  statusList: {
    id: number;
    name: string;
    status: string;
  }[] = [];
  taskEnum = TaskEnum;
  currentData!: {
    id: number;
    name: string;
    status: string;
  };
  get pendingList(): any {
    return this.statusList.filter(
      (ele) => ele.status === this.taskEnum.PENDING
    );
  }
  get doneData(): any {
    return this.statusList.filter((ele) => ele.status === this.taskEnum.DONE);
  }
  get toListData(): any {
    return this.statusList.filter((ele) => ele.status === this.taskEnum.TODO);
  }

  addTask() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      minWidth: '300px',
    });

    dialogRef.closed.subscribe((res: any) => {
      if (res) {
        this.statusList.push({ ...res, id: this.statusList.length + 1 });
      }
    });
  }

  dragOver(event: Event) {
    event.preventDefault();
  }

  drop(event: any, status: string) {
    const find = this.statusList.find((ele) => ele.id === this.currentData.id);

    if (find) {
      find.status = status;
      this.toastrService.success(`Task added to ${status} List  sucessfully`);
    }
  }

  dragStart(evet: any, status?: string) {
    this.currentData = evet;
  }
}
