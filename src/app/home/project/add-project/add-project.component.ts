import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  _name: string;
  addProjectForm: FormGroup;
  formValue: object;
  @Input()
  set name(value: string) {
    this._name = value;
  }
  constructor(private subject: NzModalSubject,
    private fb: FormBuilder) {
    this.addProjectForm = this.fb.group({
      projectName: ['', [Validators.required]],
      projectPrincipal: ['', [Validators.required]],
      projectStartTime: ['', [Validators.required]],
      projectEndTime: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  _submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.addProjectForm.controls) {
      this.addProjectForm.controls[key].markAsDirty();
    }
    if (!this.addProjectForm.invalid) {
      this.subject.next(value);
      this.subject.destroy('onOk');
    }
  };

  getFormControl(name) {
    return this.addProjectForm.controls[name];
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }

}
