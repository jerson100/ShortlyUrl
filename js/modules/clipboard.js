export const copied = (element) => {
    element.focus();  
    document.execCommand("selectAll");
    document.execCommand("copy");
    
};

