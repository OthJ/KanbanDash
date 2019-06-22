export class Ticket {


     id: string;
       dateEnregistrement: string;
       origine: string;
       demandeur: string;
       beneficiaire: string;
       groupeResolu: string;
       metaStatu: string;
       statu: string;
       sujet: string;
      //skip 1 fileds in the csv file
       localisation: string;
       dateResolution: string;
       dateMax: string;
       priorite: string;
       saisiPar: string;
       causeRéelle: string;
       resoluPar: string;
       delai: string;
       groupeCloturant: string;
       ticketParent: string;
      resolutionImmediate: string;
      //skip 4 entries
       sla: string;
       slaCorrige: string

    constructor() {}
  
}