var defangIPaddr = function(address) {  
    let period = address.split('.')
    let joined = period.join('[.]')
    return joined
};