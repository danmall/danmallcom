module.exports = {
    
  copyrightDate() {

    const startDate = 2021;
    const today = new Date();

    if(startDate == today.getFullYear()) {
        return today.getFullYear();
    }else{
        return startDate.toString() + " – " + today.getFullYear().toString();
    }
    
  }
  
}