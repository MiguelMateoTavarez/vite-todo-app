

export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor( description ) {
        
        if(!description) throw new Error('No se ha recibido la descripción')
        
        this.id = 1;
        this.description = description;
        this.done = false;
        this.date = new Date();
    }
}