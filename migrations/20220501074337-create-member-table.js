'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('member', { 
      memberId: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
      },
      memberName:{
        type:Sequelize.STRING,
        allowNull:false
      },
      memberSex:{
        type:Sequelize.ENUM('male','female'),
        allowNull:false
      },
      memberAge:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      memberDescription:{
        type:Sequelize.TEXT,
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('member');
  }
};
