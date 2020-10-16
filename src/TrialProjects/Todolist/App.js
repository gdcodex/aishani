import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';



import React, { useEffect, useState } from 'react';
import './todo.css';


const App = () => {

    const [todo, settodo] = useState([]);
    const [list, setlist] = useState([]);
    const [detail, setdetail] = useState({name:""});

    const add = () => {
        setlist((prev) => {
            return [...prev, ...todo]
        });
        settodo([]);
    };
    const deletee = (e) => {
        var neww = e.target.value;
        console.log(neww);
        setlist(() => {
            return list.filter(item => item !== neww);
        })
    };
    //local storage
    useEffect(()=>{
        
        const res = localStorage.getItem('mylist')
        if(res)
        setlist((prev)=>{
            return [...prev,...JSON.parse(res)]
        })
    },[])
    useEffect(()=>{
        localStorage.setItem("mylist",JSON.stringify(list))
        
    },[list])
    const arraytodo = [];
    if (list !== []) {
        list.forEach((item) => arraytodo.push(
            <div className="card">
            <div className="item-todo">
            <input type="text" key={item + "h"} disabled className="my-todo-item" value={item} onMouseOver={(e)=>{
                const {value} = e.target
                document.getElementById("dt").style.display="block"
                setdetail(prev=>{
                    return{...prev,name:value}
                })
            }}
            onMouseOut={(e)=>{
                document.getElementById("dt").style.display="none"
                setdetail(prev=>{
                    return{...prev,name:""}
                })
            }}
             style={{ display: "inline-block",background:'none' }}/>
          
            <button className="list-btn" onClick={deletee} key={item} value={item}>{"x"}</button >
            </div>
            </div>
            ))
    }



    return (
        <>
            <div className="todo-layout">
                <div className="add-todos">
                    {/* <input type="text" name="todo" value={todo}  onChange={(e)=>{
                    console.log(e.target.value);
                    settodo([e.target.value])
                }}/> */}


                    <TextField label="todos" size="small" margin="normal" variant="outlined" name="todo" value={todo} onChange={(e) => {
                        console.log(e.target.value);
                        settodo([e.target.value])
                    }} />
                    <Button style={{  backgroundImage: 'linear-gradient(120deg, #ec6969 0%, #D24A58 100%)', color: "seashell" }} onClick={add}>Add</Button>
                    
                </div>
 
                <div className="details" id="dt">
                {detail.name}</div>
                



                <div className="pencil">
                <svg width="756" height="625" viewBox="0 0 756 625" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 1">
<path id="Vector" d="M352.023 227.569C351.468 226.753 350.844 225.987 350.157 225.279L280.608 154.119C279.067 152.55 277.237 151.296 275.218 150.424C274.006 149.501 272.524 149.001 271 149C270.661 149.069 270.326 149.162 270 149.278C269.485 149.23 268.969 149.398 268.449 149.398H74C71.7896 149.356 69.5929 149.754 67.5375 150.568C65.4822 151.382 63.6092 152.597 62.0274 154.142C60.4456 155.686 59.1866 157.53 58.3236 159.565C57.4605 161.601 57.0106 163.787 57 165.998V179.4H44C41.7834 179.371 39.5829 179.781 37.5257 180.607C35.4686 181.433 33.5955 182.659 32.0148 184.213C30.434 185.767 29.177 187.619 28.3162 189.662C27.4555 191.705 27.0081 193.898 27 196.115V203.4H17C14.7785 203.381 12.5751 203.801 10.5166 204.636C8.45802 205.471 6.58491 206.705 5.005 208.267C3.42508 209.829 2.16955 211.687 1.3106 213.736C0.451651 215.785 0.00624276 217.983 0 220.205V607.732C0.00898929 609.946 0.457288 612.137 1.31892 614.177C2.18056 616.217 3.43841 618.065 5.01959 619.616C6.60078 621.166 8.47387 622.387 10.5304 623.208C12.5869 624.03 14.7859 624.435 17 624.4H282C284.214 624.435 286.413 624.03 288.47 623.208C290.526 622.387 292.399 621.166 293.98 619.616C295.562 618.065 296.819 616.217 297.681 614.177C298.543 612.137 298.991 609.946 299 607.732V599.4H309C311.219 599.424 313.421 599.009 315.479 598.178C317.537 597.347 319.41 596.117 320.99 594.558C322.571 593 323.827 591.144 324.687 589.098C325.547 587.052 325.993 584.856 326 582.637V571.4H338C340.225 571.412 342.43 570.985 344.49 570.144C346.549 569.302 348.422 568.062 350.001 566.495C351.581 564.928 352.835 563.064 353.693 561.012C354.551 558.959 354.995 556.757 355 554.532V237.161C354.994 236.383 354.935 235.606 354.823 234.836C355.134 233.484 355.034 232.069 354.535 230.774C354.036 229.479 353.161 228.363 352.023 227.569ZM331.571 226.4H281C280.194 226.374 279.43 226.035 278.87 225.455C278.309 224.874 277.997 224.099 278 223.292V171.479L331.571 226.4ZM285 607.732C284.992 608.109 284.906 608.48 284.749 608.822C284.591 609.164 284.364 609.47 284.082 609.721C283.801 609.971 283.47 610.161 283.112 610.278C282.754 610.394 282.375 610.436 282 610.4H17C16.6249 610.436 16.2463 610.394 15.888 610.278C15.5298 610.161 15.1995 609.971 14.9179 609.721C14.6362 609.47 14.4094 609.164 14.2514 608.822C14.0935 608.48 14.0079 608.109 14 607.732V220.205C14.0045 219.821 14.0867 219.442 14.2416 219.091C14.3965 218.74 14.6208 218.424 14.9011 218.162C15.1814 217.9 15.5119 217.697 15.8726 217.566C16.2333 217.435 16.6168 217.379 17 217.4H27V582.637C27.0071 584.856 27.4534 587.052 28.3132 589.098C29.173 591.144 30.4293 593 32.0096 594.558C33.5899 596.117 35.4629 597.347 37.5208 598.178C39.5788 599.009 41.7808 599.424 44 599.4H285V607.732ZM312 582.637C311.995 583.019 311.911 583.395 311.756 583.743C311.6 584.092 311.375 584.405 311.094 584.663C310.813 584.922 310.483 585.121 310.123 585.247C309.763 585.374 309.381 585.426 309 585.4H44C43.6192 585.426 43.2372 585.374 42.8772 585.247C42.5172 585.121 42.1868 584.922 41.9061 584.663C41.6253 584.405 41.4002 584.092 41.2445 583.743C41.0887 583.395 41.0055 583.019 41 582.637V196.115C41.0067 195.736 41.091 195.362 41.2478 195.017C41.4047 194.672 41.6307 194.362 41.9119 194.108C42.193 193.853 42.5234 193.659 42.8826 193.537C43.2417 193.416 43.6221 193.369 44 193.4H57V554.532C57.0051 556.757 57.4493 558.959 58.307 561.012C59.1648 563.064 60.4193 564.928 61.9986 566.495C63.5779 568.062 65.451 569.302 67.5104 570.144C69.5699 570.985 71.7752 571.412 74 571.4H312V582.637ZM338 557.4H74C73.6133 557.414 73.2277 557.351 72.866 557.213C72.5043 557.076 72.1738 556.867 71.8941 556.6C71.6144 556.332 71.3911 556.012 71.2376 555.656C71.084 555.301 71.0032 554.919 71 554.532V166C71 164.346 72.346 163.4 74 163.4H264V223.292C264.001 227.81 265.789 232.145 268.974 235.35C272.159 238.555 276.482 240.37 281 240.4H341V554.532C340.997 554.919 340.916 555.301 340.762 555.656C340.609 556.012 340.386 556.332 340.106 556.6C339.826 556.867 339.496 557.076 339.134 557.213C338.772 557.351 338.387 557.414 338 557.4Z" fill="#EC6969"/>
</g>
<path id="f1" d="M307 271.4H104C102.143 271.4 100.363 272.137 99.0502 273.45C97.7375 274.763 97 276.543 97 278.4C97 280.257 97.7375 282.037 99.0502 283.35C100.363 284.663 102.143 285.4 104 285.4H307C308.857 285.4 310.637 284.663 311.95 283.35C313.262 282.037 314 280.257 314 278.4C314 276.543 313.262 274.763 311.95 273.45C310.637 272.137 308.857 271.4 307 271.4Z" fill="#EC6969"/>
<path id="f2" d="M307 311.4H104C102.143 311.4 100.363 312.137 99.0502 313.45C97.7375 314.763 97 316.543 97 318.4C97 320.257 97.7375 322.037 99.0502 323.35C100.363 324.663 102.143 325.4 104 325.4H307C308.857 325.4 310.637 324.663 311.95 323.35C313.262 322.037 314 320.257 314 318.4C314 316.543 313.262 314.763 311.95 313.45C310.637 312.137 308.857 311.4 307 311.4Z" fill="#EC6969"/>
<path id="f3" d="M307 352.4H104C102.143 352.4 100.363 353.137 99.0502 354.45C97.7375 355.763 97 357.543 97 359.4C97 361.257 97.7375 363.037 99.0502 364.35C100.363 365.663 102.143 366.4 104 366.4H307C308.857 366.4 310.637 365.663 311.95 364.35C313.262 363.037 314 361.257 314 359.4C314 357.543 313.262 355.763 311.95 354.45C310.637 353.137 308.857 352.4 307 352.4Z" fill="#EC6969"/>
<path id="f4" d="M307 393.4H104C102.143 393.4 100.363 394.138 99.0502 395.45C97.7375 396.763 97 398.543 97 400.4C97 402.257 97.7375 404.037 99.0502 405.35C100.363 406.662 102.143 407.4 104 407.4H307C308.857 407.4 310.637 406.662 311.95 405.35C313.262 404.037 314 402.257 314 400.4C314 398.543 313.262 396.763 311.95 395.45C310.637 394.138 308.857 393.4 307 393.4Z" fill="#EC6969"/>
<path id="f5" d="M245 447.4C246.857 447.4 248.637 446.662 249.95 445.35C251.262 444.037 252 442.257 252 440.4C252 438.543 251.262 436.763 249.95 435.45C248.637 434.138 246.857 433.4 245 433.4H104C102.143 433.4 100.363 434.138 99.0502 435.45C97.7375 436.763 97 438.543 97 440.4C97 442.257 97.7375 444.037 99.0502 445.35C100.363 446.662 102.143 447.4 104 447.4H245Z" fill="#EC6969"/>
<g id="pencil">
<path d="M561.254 55.1931L444.182 337.345C443.837 338.177 443.656 339.068 443.649 339.97C443.633 340.121 443.616 340.273 443.61 340.427L441.749 386.808C441.473 387.823 441.43 388.888 441.624 389.922L439.975 431.05C439.918 432.481 440.302 433.894 441.073 435.1C441.845 436.306 442.968 437.246 444.291 437.794C445.613 438.342 447.072 438.471 448.471 438.164C449.869 437.857 451.139 437.128 452.111 436.077L513.751 369.334C514.572 368.625 515.216 367.735 515.632 366.733L632.704 84.5844L642.298 61.4649C643.769 57.8267 644.503 53.9324 644.457 50.0081C644.41 46.0839 643.585 42.2079 642.027 38.6055C638.276 29.5812 630.537 22.1116 620.794 18.1119L616.703 16.4326C598.16 8.81721 577.588 15.8354 570.849 32.0741L561.254 55.1931ZM506.836 351.398L494.107 336.075L600.773 79.0136L617.082 85.7136L506.836 351.398ZM587.82 73.6959L481.181 330.701L461.292 332.634L571.511 67.0013L587.82 73.6959ZM482.983 344.589L499.348 364.289L474.137 391.588L455.869 384.088L457.354 347.083L482.983 344.589ZM455.271 398.977L464.003 402.562L454.725 412.609L455.271 398.977ZM611.385 29.3853L615.478 31.0648C621.542 33.4096 626.436 38.0503 629.1 43.9804C629.949 45.8804 630.41 47.9306 630.456 50.011C630.503 52.0913 630.134 54.1601 629.372 56.0963L622.444 72.7782L599.637 63.4158L587.591 58.4718L576.881 54.0706L583.778 37.4403C587.569 28.3044 599.953 24.6908 611.385 29.3853Z" fill="#D24A58"/>
<path d="M561.254 55.1931L444.182 337.345C443.837 338.177 443.656 339.068 443.649 339.97C443.633 340.121 443.616 340.273 443.61 340.427L441.749 386.808C441.473 387.823 441.43 388.888 441.624 389.922L439.975 431.05C439.918 432.481 440.302 433.894 441.073 435.1C441.845 436.306 442.968 437.246 444.291 437.794C445.613 438.342 447.072 438.471 448.471 438.164C449.869 437.857 451.139 437.128 452.111 436.077L513.751 369.334C514.572 368.625 515.216 367.735 515.632 366.733L632.704 84.5844L642.298 61.4649C643.769 57.8267 644.503 53.9324 644.457 50.0081C644.41 46.0839 643.585 42.2079 642.027 38.6055C638.276 29.5812 630.537 22.1116 620.794 18.1119L616.703 16.4326C598.16 8.81721 577.588 15.8354 570.849 32.0741L561.254 55.1931ZM506.836 351.398L494.107 336.075L600.773 79.0136L617.082 85.7136L506.836 351.398ZM587.82 73.6959L481.181 330.701L461.292 332.634L571.511 67.0013L587.82 73.6959ZM482.983 344.589L499.348 364.289L474.137 391.588L455.869 384.088L457.354 347.083L482.983 344.589ZM455.271 398.977L464.003 402.562L454.725 412.609L455.271 398.977ZM611.385 29.3853L615.478 31.0648C621.542 33.4096 626.436 38.0503 629.1 43.9804C629.949 45.8804 630.41 47.9306 630.456 50.011C630.503 52.0913 630.134 54.1601 629.372 56.0963L622.444 72.7782L599.637 63.4158L587.591 58.4718L576.881 54.0706L583.778 37.4403C587.569 28.3044 599.953 24.6908 611.385 29.3853Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="690.579" y1="155.394" x2="378.596" y2="285.083" gradientUnits="userSpaceOnUse">
<stop offset="0.588542" stop-color="#EC6969" stop-opacity="0.85"/>
<stop offset="1" stop-color="#D24A58"/>
</linearGradient>
</defs>
</svg>

                </div>
                
                <div className="todo-list">
                    {arraytodo}
                </div>
            </div>
        </>
    )
};
export default App;