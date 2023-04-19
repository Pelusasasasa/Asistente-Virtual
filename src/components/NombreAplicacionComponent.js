import { BaseComponent,Component,Intents } from "@jovotech/framework";

import { YesNoOutput } from "../output/YesNoOutput";

@Component()

export class NombreAplicacionComponent extends BaseComponent{
    START(){
        return this.$send(YesNoOutput,{message: "Cual es mi nombre"})
    }

    @Intents('MyNameIsIntent')
    minombre(){
        this.$send("Señor")
        return this.$send({message:"Aqui estoy Señor"});
    };

    UNHANDLED(){
        return this.START();
    }
}
