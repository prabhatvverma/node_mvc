/**
 * Users Controller
 */
class EmployeeControllers {

    /**
     * Show list of users
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async index(req, res, next){

        res.render('users/index', { title: 'Express users' });
    }

    /**
     * Show Create form
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async create(req, res, next){

        res.render('users/create', { title: 'Express users' });
    }
}

module.exports = new EmployeeControllers;