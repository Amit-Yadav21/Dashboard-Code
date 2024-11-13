import React, { useState } from 'react';
import Cart from '../Cart/Cart';

function Data() {
    const initialData = {
        backlog: [
            { title: "Performance improvements", role: "Engineering", img: "https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg", msg: "Innovate to solve problems, optimize, and improve constantly" },
            { title: "Implement new designs", role: "Engineering", img: "https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg", msg: "Precision and creativity drive engineering advancements forward" }
        ],
        ready: [
            { title: "Design navigation changes", role: "Design", img: "https://www.shutterstock.com/image-photo/wide-banner-view-portrait-smiling-260nw-1893899437.jpg", msg: "Aesthetics and usability are key in effective design." },
            { title: "Design prototype", role: "Design", img: "https://www.shutterstock.com/image-photo/portrait-smiling-millennial-arabic-businessman-260nw-1769759789.jpg", msg: "Creativity in design solves problems and enhances lives" },
            { title: "Website redesign", role: "Design", img: "https://www.shutterstock.com/image-photo/handsome-hispanic-millennial-man-sit-260nw-2174725871.jpg", msg: "Design transforms ideas into visual and functional experiences" }
        ],
        progress: [
            { title: "Build social sharing functionality", role: "Engineering", img: "https://www.shutterstock.com/image-photo/handsome-hispanic-millennial-man-sit-260nw-2174725871.jpg", msg: "Efficiency and sustainability guide modern engineering practices" },
            { title: "Redesign overview", role: "Design", img: "https://www.shutterstock.com/image-photo/happy-digital-gadgets-user-man-260nw-2156291483.jpg", msg: "Good design balances beauty, practicality, and user needs" }
        ],
        done: [
            { title: "Usability testing", role: "Research", img: "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png", msg: "In-depth research uncovers insights and solves complex problems." },
            { title: "Introduce new navigation", role: "Data Science", img: "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg", msg: "Data science transforms data into actionable insights and strategies" }
        ]
    };

    const [data, setData] = useState(initialData);

    return (
        <div>
            <Cart 
                backlog={data.backlog} 
                setBacklog={(newBacklog) => setData(prev => ({ ...prev, backlog: newBacklog }))}
                ready={data.ready} 
                setReady={(newReady) => setData(prev => ({ ...prev, ready: newReady }))}
                progress={data.progress} 
                setProgress={(newProgress) => setData(prev => ({ ...prev, progress: newProgress }))}
                done={data.done} 
                setDone={(newDone) => setData(prev => ({ ...prev, done: newDone }))}
            />
        </div>
    );
}

export default Data;