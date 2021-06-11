
import Cors from 'cors'
import Middleware from './middleware'


const cors = Middleware(
    Cors({
        methods: ['GET', 'POST'],
    })
)

export default async (req, res) => {
    await cors(req, res)

    //calculer l'IMC
    if (req.method === "POST"){
        try{
            var poid = req.body.poid
            var taille = parseFloat(req.body.taille)
    
            if (isNaN(taille)){
                throw "N'est pas un réel"
            }
    
            var imc = (poid) / (taille * taille)
            imc = Math.round(imc * 100) / 100
            var interpretation = ""
    
            if (imc > 40)
                interpretation = "Obésité morbide"
            else if (imc <= 40 && imc > 35)
                interpretation = "Obésité sévère"
            else if (imc <= 35 && imc > 30)
                interpretation = "Obésité modérée"
            else if (imc <= 30 && imc > 25)
                interpretation = "Surpoids"
            else if (imc <= 25 && imc > 18.5)
                interpretation = "Corpulence normale"
            else if (imc <= 18.5 && imc > 16.5)
                interpretation = "Maigreur"
            else if (imc <= 16.5)
                interpretation = "Famine"
            
            var response = {
                "succes": true,
                imc,
                interpretation
            }
        
            res.json(response)
        }
        catch(error){
            console.log(error);
            var response = {
                succes: false,
                message: "Une érreur est survenue lors du calcul"
            }
        
            res.json(response)
        }
    }
    
}
