const db = require("../database");

module.exports = {
    async index(){
        return await db.models.State.findAll();
    },
    async show(id){
        return await db.models.State.findByPk(id);
    },
    async store(state){
        try{
            await db.models.State.create(state);
            return {status: true, message:'new state has been created',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to save the new state',type: 'error', error};
        }
    },
    async update(id, state){
        try{
            await db.models.State.update(state, {
                where: {id}
            });
            return {status: true, message:'state has been updated',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to update the state',type: 'error', error};
        }
    },
    async delete(id){
        try{
            await db.models.State.destroy({
                where: {id}
            });
            return {status: true, message:'state has been deleted',type: 'success'};
        }catch(error){
            return {status: false, message:'fail to delete the state',type: 'error', error};
        }
    }
};