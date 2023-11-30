const db = require("../database");

module.exports = {
    async index(){
        return await db.models.City.findAll();
    },
    async show(id){
        return await db.models.City.findByPk(id);
    },
    async store(city){
        try{
            await db.models.City.create(city);
            return {status: true, message:'new city has been created',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to save the new city',type: 'error', error};
        }
    },
    async update(id, city){
        try{
            await db.models.City.update(city, {
                where: {id}
            });
            return {status: true, message:'city has been updated',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to update the city',type: 'error', error};
        }
    },
    async delete(id){
        try{
            await db.models.City.destroy({
                where: {id}
            });
            return {status: true, message:'city has been deleted',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to delete the city',type: 'error', error};
        }
    }
};