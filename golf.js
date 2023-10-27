
let p1 = document.querySelector("#page1")
let nav = document.querySelector("#nav");
let h4 = document.querySelectorAll(" #nav h4");
let q = document.querySelector("#q");
let m = document.querySelector("#mouse");
let mb = document.querySelector("#mouse-blr");

let p2 = document.querySelector("#page2");
let p3 = document.querySelector("#page3");
firstscroll();
function firstscroll()
{
document.addEventListener("scroll",function(){
   if(window.pageYOffset>5)
    {
        nav.style.backgroundColor="black";
        m.style.zIndex="20";

        for(a of h4)
        {
            a.style.color="white";
            
            
        }
        nav.style.height="90px"
        nav.style.transitionDuration="0.75s"
       
      

}

else
    { m.style.zIndex="1";
        nav.style.backgroundColor="transparent";
        for(a of h4)
        {
            a.style.color="white";
            
        }
        nav.style.height="15%";
        nav.style.transitionDuration="0"

        
}
console.log(window.pageYOffset)

if(window.pageYOffset>350)
    {
        p2.style.backgroundColor="black";
        p2.style.opacity="0.8"
        
        
        p2.style.transitionDuration="0.75s"
    }
   else
    {
        p2.style.backgroundColor="rgba(0, 0, 0, 0.39)";
        
        
        p2.style.transitionDuration="0.75s"
    }
     if(window.pageYOffset>600)
    {
        p2.style.backgroundColor="black";
        p2.style.opacity="1"
        
        
        p2.style.transitionDuration="0.75s"
    }



       
    
        

    
   
       
    
      
      


})
}

document.addEventListener("mousemove",function(details){
    m.style.left=details.clientX+"px";
 m.style.top=details.clientY +"px";
 mb.style.left=details.clientX -150+"px";
 mb.style.top=details.clientY  -150+"px";

});
mousenav();

function mousenav()
{
let h4_1 =document.querySelector("#h4-1");



    h4_1.addEventListener("mouseenter",function(){
        h4_1.style.color="black";
        m.style.backgroundColor="transparent";
        m.style.scale="3";
        m.style.border="1px solid white"
        
       
        

}
    )
    h4_1.addEventListener("mouseleave",function(){
        h4_1.style.color="white";
        m.style.backgroundColor=" #96c11e";
        m.style.scale="1";
        m.style.border="none"
        
    })
    let h4_2 =document.querySelector("#h4-2");


    h4_2.addEventListener("mouseenter",function(){
        h4_2.style.color="black";
        m.style.backgroundColor="transparent";
        m.style.scale="3";
        
        m.style.border="1px solid white";
        
        
       
        

}
    )
    h4_2.addEventListener("mouseleave",function(){
        h4_2.style.color="white";
        m.style.backgroundColor=" #96c11e";
        m.style.scale="1";
        
        
        
    })
    let h4_3 =document.querySelector("#h4-3");


    h4_3.addEventListener("mouseenter",function(){
        h4_3.style.color="black";
        m.style.backgroundColor="transparent";
        m.style.scale="3";
        m.style.border="1px solid white"
        
       
        

}
    )
    h4_3.addEventListener("mouseleave",function(){
        h4_3.style.color="white";
        m.style.backgroundColor=" #96c11e";
        m.style.scale="1";
        m.style.border="none"
        
    })
    let h4_4 =document.querySelector("#h4-4");


    h4_4.addEventListener("mouseenter",function(){
        h4_4.style.color="black";
        m.style.backgroundColor="transparent";
        m.style.scale="3";
        m.style.border="1px solid white"
        
       
        

}
    )
    h4_4.addEventListener("mouseleave",function(){
        h4_4.style.color="white";
        m.style.backgroundColor=" #96c11e";
        m.style.scale="1";
        m.style.border="none"
        
    })
    let h4_5 =document.querySelector("#h4-5");


    h4_5.addEventListener("mouseenter",function(){
        h4_5.style.color="black";
        m.style.backgroundColor="transparent";
        m.style.scale="3";
        m.style.border="1px solid white"
        
       
        

}
    )
    h4_5.addEventListener("mouseleave",function(){
        h4_5.style.color="white";
        m.style.backgroundColor=" #96c11e";
        m.style.scale="1";
        m.style.border="none"
    })
}
arr();
function arr(){
let arow = document.querySelector("#arrow");
arow.addEventListener("mouseenter",function(){
    arow.style.scale="0.4";
    arow.style.transitionDuration="1s"
    arow.style.backgroundColor="#96c11e";
    m.style.scale="4";
    m.style.backgroundColor=" transparent"
    m.style.border=" 0.5px solid white";
    
    
})
arow.addEventListener("mouseleave",function(){
    arow.style.scale="1";
    arow.style.backgroundColor=" transparent"
    m.style.scale="1";
    m.style.backgroundColor="#96c11e";
    m.style.border="none";
    

})
let ct1= document.querySelector("#colon1");
let ct2= document.querySelector("#colon2");
document.addEventListener("scroll",function(){
    if(window.pageYOffset>3300)
    {
        ct1.style.transform="translate(50px,50px)"
        ct2.style.transform="translate(-50px,-50px)"
        ct1.style.transitionDuration="2s";
        ct2.style.transitionDuration="2s";
    }
   else
    {ct1.style.transform="translate(-50px,-50px)"
    ct2.style.transform="translate(50px,50px)"
    ct1.style.transitionDuration="2s";
    ct2.style.transitionDuration="2s";
        
    }
})
}


document.addEventListener("scroll",function(){
    if(window.pageYOffset>3510)
    {
        q.style.transform="translate(0,-50px)"
        
        q.style.transitionDuration="2s";
    }
   else
    {q.style.transform="translate(0,50px)"

    
    q.style.transitionDuration="2s";
        
    }
})
 let h4_1 = document.querySelector("#bc #h4-1");
 h4_2  = document.querySelector("#bc #h4-2");
 h4_3 = document.querySelector("#bc #h4-3");
let t =  document.querySelector("#Tt");
t.addEventListener("mouseenter",function(){
    t.style.backgroundImage= "url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1)";  
    t.style.backgroundSize="100% 100%";
    h4_1 .style.color="white";
    t.style.transitionDuration="3s";
   
})
t.addEventListener("mouseleave",function(){
    t.style.backgroundImage="none";
    h4_1 .style.color="black";
    t.style.transitionDuration="0";
    
})



let g =  document.querySelector("#gl");
g.addEventListener("mouseenter",function(){
    g.style.backgroundImage= "url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
   g.style.backgroundSize="100% 100%";
   h4_2.style.color="white";
    g.style.transitionDuration="3s";
    

})


g.addEventListener("mouseleave",function(){
    g.style.backgroundImage="none";
    h4_2 .style.color="black";
    g.style.transitionDuration="0";
   
})
let ag =  document.querySelector("#ag");
ag.addEventListener("mouseenter",function(){
    ag.style.backgroundImage= "url(https://navbharattimes.indiatimes.com/thumb/94456704/lucknow-golf-club-94456704.jpg?imgsize=112502&width=1200&height=900&resizemode=75)";  
    ag.style.backgroundSize="100% 100%";
    h4_3 .style.color="white";
    ag.style.transitionDuration="3s";
    
})


ag.addEventListener("mouseleave",function(){
    ag.style.backgroundImage="none";
    h4_3 .style.color="black";
    ag.style.transitionDuration="0";
   
})
let ep1 = document.querySelector("#elm1 #p1");
let ep2 = document.querySelector("#elm2 #p2");
let ep3 = document.querySelector("#elm3 #p3");
let em1 = document.querySelector("#elm1");
let em2 = document.querySelector("#elm2");
let em3 = document.querySelector("#elm3");
em1.addEventListener("mouseenter",function(){
    ep1.style.visibility= "visible";
    // ep1.style.transitionDuration="4s"
});
em1.addEventListener("mouseleave",function(){
    ep1.style.visibility= "hidden";
    // ep1.style.transitionDuration="none";
});
em2.addEventListener("mouseenter",function(){
    ep2.style.visibility= "visible";
    // ep2.style.transitionDuration="4s"
});
em2.addEventListener("mouseleave",function(){
    ep2.style.visibility= "hidden";
    // ep2.style.transitionDuration="none";
});
em3.addEventListener("mouseenter",function(){
    ep3.style.visibility= "visible";
    // ep3.style.transitionDuration="4s"
});
em3.addEventListener("mouseleave",function(){
    ep3.style.visibility= "hidden";
    // ep3.style.transitionDuration="none";
});
let ar1= document.querySelector("#ar-1");
ar1.addEventListener("mouseenter",function(){
    ar1.style.backgroundColor="white";
})
ar1.addEventListener("mouseleave",function(){
    ar1.style.backgroundColor=" #96c11e";
})
let ar2= document.querySelector("#ar-2");
ar2.addEventListener("mouseenter",function(){
    ar2.style.backgroundColor="white";
})
ar2.addEventListener("mouseleave",function(){
    ar2.style.backgroundColor=" #96c11e";
})
let ar3= document.querySelector("#ar-3");
ar3.addEventListener("mouseenter",function(){
    ar3.style.backgroundColor="white";
})
ar3.addEventListener("mouseleave",function(){
    ar3.style.backgroundColor=" #96c11e";
})

let scroller = document.querySelector("#scroller");
scroller.addEventListener("mouseenter",function(){
    scroller.style.color="#96c11e";
})
scroller.addEventListener("mouseleave",function(){
    scroller.style.color="black";
    
})

  




      











    


