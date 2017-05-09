import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../core';
import { LoaderBlockService } from '../loader-block/loader-block.service';
import AuthHttp from "../core/http-interceptor.service";

@Component({
    selector: 'login-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/login-page/login-page.component.html',
    styleUrls: ['src/app/login-page/login-page.component.css']
})

export class LoginPageComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;

    constructor(private authService: AuthService,
                private loaderBlockService: LoaderBlockService,
                private router: Router,
                private formBuilder: FormBuilder,
                private changeDetector: ChangeDetectorRef,
                private authHttp: AuthHttp) {

        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public login(): void {
        const formModel = this.loginForm.value;
        this.authService.login(formModel.username, formModel.password)
            .subscribe(
                (token: string) => {
                    this.router.navigate(['/courses']);
                    this.loaderBlockService.stop()
                },
                (error) => {
                    console.error(error);
                    this.changeDetector.detectChanges();
                    this.loaderBlockService.stop()
                },
                () => {
                    console.log('DOne');
                    this.loaderBlockService.stop()
                }
            );
    }

    ngOnInit(): void {
        console.log('LOGIN PAGE: Login Page initialized');
    }

    ngOnDestroy(): void {
        this.loaderBlockService.stop();
        console.log('LOGIN PAGE: Login Page destroyed');
    }

    private getUserInfo(): void {
        //this.authHttp.request()
    }
}