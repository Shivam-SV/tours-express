const db = require("../database");

module.exports = {
    async index(){
        return await db.models.Country.findAll();
    },
    async show(id){
        return await db.models.Country.findByPk(id);
    },
    async store(country){
        try{
            await db.models.Country.create(country);
            return {status: true, message:'new country has been created',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to save the new country',type: 'error', error};
        }
    },
    async update(id, country){
        try{
            await db.models.Country.update(country, {
                where: {id}
            });
            return {status: true, message:'country has been updated',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to update the country',type: 'error', error};
        }
    },
    async delete(id){
        try{
            await db.models.Country.destroy({
                where: {id}
            });
            return {status: true, message:'country has been deleted',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to delete the country',type: 'error', error};
        }
    }
};