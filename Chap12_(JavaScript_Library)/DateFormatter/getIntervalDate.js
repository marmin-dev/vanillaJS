function getIntervalDate(intervalDay, format){
    let now = new Date();
    let millisecondsOneDay = 60 * 60 *24 * 1000;
    let d = new Date(now.getTime()+(millisecondsOneDay*intervalDay));
    let year = d.getFullYear();
    let month = d.getMonth();
    month = month.toString().padStart(2,0);
    let day = d.getDate();
    format = format.replace("YYYY",year);
    format = format.replace("MM",month);
    format = format.replace("DD",day);
    return format;
}
getIntervalDate(5,"YYYY-MM-DD");
getIntervalDate(-5,"YYYY-MM-DD");