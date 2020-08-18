class Button {
    constructor(){
        this.name = createInput('Name');
        this.Password = createInput('Password');
        this.Email = createInput('Email');
    }
    hide(){
        this.name.hide();
        this.Password.hide();
        this.Email.hide();
    }
    display(){
        this.name.position(200,200);
        this.Password.position(200,300);
        this.Email.position(200,250);
    }
    show(){
        this.name.show();
        this.Password.show();
        this.Email.show();
    }
}