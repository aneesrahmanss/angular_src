import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { Account } from '../models';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private service: CommonService, private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute) { }
  formdata;
  account:Account;
  ngOnInit() {
    this.formdata = this.formBuilder.group({
      acctNum: ['', Validators.required]
    })

  }
  onClickSubmit(data) {
    
    if (this.formdata.valid) {
      debugger;
      this.account = new Account();
      this.account.accountNumber = data.acctNum;
      this.account.submittedBy = JSON.parse(sessionStorage.usersession).username;
      this.account.status = 'pending';
  

      this.service.submitAccounts(this.account)
      .subscribe(data => {
        console.log(data)
        alert("Account Number added successfully")
        //this.router.navigate(['/home'], { relativeTo: this.route })
        window.location.reload();
      })     
    } else {
      alert("Please enter valid account number")
    }
  }

}
