const myModule = {
    Add(x1,x2){
        return x1+x2;
    },
    LogToConsole(text){
        console.log(text);
    }
}

const myName = 'Cagatay';

const getData = ()=>{
    return new Date();
}

module.exports = {
    myModule,
    myName,
    getData
}