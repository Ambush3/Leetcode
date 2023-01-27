var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null

    let nowA = headA;
    let nowB = headB;

    while (nowA !== nowB){
        nowA = nowA ? nowA.next : headB;
        nowB = nowB ? nowB.next : headA;
    }

    return nowA

};