import { BaseComponent, Component,Intents } from "@jovotech/framework";

@Component()

export class SaludoInicial extends BaseComponent{
    START(){
        return this.$send({message: "Hola señor"});
    };

    @Intents('MyNameIsIntent')
    probando(){
        return this.$send({message:"Aqui estoy Señor"})
    }

    UNHANDLED(){
        return this.START();
    }
};