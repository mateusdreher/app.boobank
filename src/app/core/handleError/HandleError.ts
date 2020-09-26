import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowMessagesService } from '@core/messages/show-messages.service';

class AppErrorHandle extends ErrorHandler {
    
    constructor () {
        super();
    }

    handleError(error: Error | HttpErrorResponse) {
        let msg = new ShowMessagesService();    
        
        let errormsg = "";

        console.error(error);
        if (error['error'].res) {
            errormsg = error['error'].res.message;
        }
        else { 
            errormsg = error['statusText'];
        }


        if (errormsg == "Userr not exists") {
            msg.error("Usuário inválido");
        }
        if (errormsg == "Invalid password") {
            msg.error("Senha incorreta");
        }
        if (errormsg == "Unauthorized") {
            sessionStorage.removeItem('session_value');
            location.reload();
        }
        
        //super.handleError(error);
    }
}

export { AppErrorHandle };