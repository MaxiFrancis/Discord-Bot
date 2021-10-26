const { MessageEmbed } = require('discord.js')
exports.intro = function (args) {

    // const embed = new MessageEmbed().setTitle('Întrebare pântru dumitale e:')

    let replies = [
            "Care este versetul tău preferat?", 
            "La ce întâmplare din Biblie ți-ar fi plăcut să iei parte?", 
            "Ce ți se pare cel mai dificil/ provocator în relația ta cu Domnul Isus?", 
            "Dacă ar fi să te întâlnești cu un personaj biblic, pe cine ai alege?", 
            "Cine sau ce a avut un impact mare în viața ta?", 
            "Ce lucru te enervează tare la tine?", 
            "Care este cartea ta preferată?", 
            "Care este cartea din Biblie preferată?", 
            "Dacă ai putea schimba ceva la viața ta, ce ar fi acel lucru?", 
            "Împărtășește-ne o amintire din ziua botezului.", 
            "Ce calitate apreciezi la un om cel mai mult?", 
            "Cum reușești să te liniștești când în viața ta este furtună?", 
            "Spune-ne un domeniu în care te prelucrează Domnul în cadrul familiei.", 
            "Ce îți place la adunarea unde mergi?", 
            "Povestește-ne un răspuns la o rugăciune. Nu neapărat a ta.", 
            "Spune-ne două lucruri pe care le-ai învățat în 2020.", 
            "Te-a ajutat comunitatea BPH/ DDM? Cum?", 
            "Cum ai vrea să fie viața ta de acum în 5 ani?", 
            "Cine este Domnul Isus pentru tine?", 
            "Spune-ne două motive de mulțumire. ", 
            "Într-o zi obișnuită, ce îți aduce bucurie?", 
            "Cu ce te implici în adunarea ta?", 
            "Care este melodia ta preferată?", 
            "Consideri că viața de credință este mai bună decât viața fără Isus? De ce?", 
            "Care este scopul vieții tale?", 
            "Spune-ne un motiv de rugăciune.", 
            "Care caracteristică a ta te definește cel mai bine? ", 
            "Care e hobby-ul tău preferat? ", 
            "Care sunt 3 caracteristici care îți definesc caracterul?", 
            "Ce pasiuni sau talente ai? Cum le folosești?", 
            "Ce calitate apreciezi cel mai mult la ceilalti?", 
            "Ești născut din nou? Dacă da, de cât timp? Cum ai luat această decizie?", 
            "Ce te-a determinat să-ți predai viața Domnului?", 
            "Cum ai ajuns pe această comunitate, prin cine, și ce te-a făcut să-ți dorești să intri?", 
            "Care este prima ta impresie despre comunitatea BPH?", 
            "Ce ai vrea sa se spună despre tine la înmormântarea ta", 
            "Ți-ar place să te implici?", 
            "Ce daruri ai? Ai dori să le folosești pe această comunitate sau în viața de zi cu zi? Dacă da, cum?", 
            "Dacă ai fi un desert, ce desert ai fi? De ce?", 
            "Care este cel mai subestimat obiect?", 
            "Care este comedianul tău preferat? ", 
            "Care sunt 3 momente mici din viața de zi cu zi care îți aduc bucurie?", 
            "Ce hobbies ți-ar plăcea să încerci dar nu ai încercat încă?", 
            "Care e amintirea cea mai amuzantă din copilărie?", 
            "Povestește o amintire dragă ție. ", 
            "Ți-ai rupt vreodată ceva? În ce context,  cum?", 
        ];

        var result = Math.floor(Math.random() * replies.length);
        // embed.setDescription(replies[result])
    
        return replies[result]

    }
