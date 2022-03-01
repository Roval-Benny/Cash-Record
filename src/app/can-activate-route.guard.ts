import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./services/authentication.service";

@Injectable()
export class CanActivateRouteGaurd implements CanActivate{
    token:string='';
    constructor(private router:Router, private auth:AuthenticationService){
        this.token = this.auth.getBearToken() as string
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
        return new Promise<boolean>((resolve,rejects)=>{
            if(this.token!=null && this.token.length>1){
                resolve(true)
            }else{
                rejects(false);
                this.router.navigate(['login'])
            }
        })
    }

}