export  const  toDatetimeLocal=(newDate)=>{
    const  date=new  Date()(newDate),
        ten=(i)=>((i<10?'0':'')+i),
        YYYY=date.getFullYear(),
        MTH=ten(date.getMonth()+1),
        DAY=ten(date.getDate()),
        HH= ten(date.getHours()),
        MM=ten(date.getMinutes()),
        SS=ten(date.getSeconds())

    return '${YYYY}-${MTH}-${DAY} T ${HH}: ${MM}:${SS}'

}