module.exports = (sequelize, DataTypes) => {
    const member = sequelize.define('member', {
        memberId: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        memberName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        memberSex:{
            type:DataTypes.ENUM('male','female'),
            allowNull:false
        },
        memberAge:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        memberDescription:{
            type:DataTypes.TEXT,
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull:false
        },
        updatedAt:{
            type:DataTypes.DATE,
            allowNull:false
        }
    },{
        tableName:'member' 
    });
    return member;
}