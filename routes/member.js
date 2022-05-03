var express = require('express');
const Validator = require('fastest-validator');
var router = express.Router();

const v = new Validator();

const { member } = require('../models');

router.get('/', async (req, res) => {
    let findMember = await member.findAll();
    return res.json(findMember);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    let findMember = await member.findByPk(id);

    if(!findMember){
        return res.json({Message: "Member not found!"});
    }

    return res.json(findMember);
});

router.post('/', async (req, res) => {
  const schema = {
    memberName: 'string',
    memberAge: 'number',
    memberSex: { type: "enum", values: ["male", "female"] },
    memberDescription: 'string|optional',  
  };

  const validate = v.validate(req.body, schema);

  if(validate.length){
      return res.status(400).json(validate);
  }

  const insertMember = await member.create(req.body);
  res.json(insertMember); 
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let findMember = await member.findByPk(id);

    if(!findMember){
        return res.json({Message: "Member not found!"});
    }

    const schema = {
        memberName: 'string|optional',
        memberAge: 'number|optional',
        memberSex: { type: "enum", values: ["male", "female"], optional: true },
        memberDescription: 'string|optional',  
    };
    
    const validate = v.validate(req.body, schema);
    
    if(validate.length){
        return res.status(400).json(validate);
    }
    
    let updateMember = findMember;
    updateMember = await updateMember.update(req.body);
    res.json(updateMember);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    let findMember = await member.findByPk(id);

    if(!findMember){
        return res.json({Message: "Member not found!"});
    }

    await findMember.destroy();

    res.json({Message:"Member deleted"});
});

module.exports = router;
