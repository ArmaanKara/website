<ul className="nav-menu">
<li className='nav-item'>
    <a href="#projects" className="projectsbar">Past Work</a>
  </li>
<li className='nav-item'>
    <a href="#skills" className="skillsbar">Skills</a>
  </li>
<li className='nav-item'>
    <a href="#testimonials" className="testimonialsbar">Testimonials</a>
  </li>
</ul>


.navbar {
    --tw-bg-opacity: 1;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    /* position: sticky; */
    top: 0px;
    z-index: 10;
}

.navbar-container{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    /* flex: auto; */
    flex-wrap: wrap;
    padding: 1.25rem;
    flex-direction: column;
    /* flex-direction: row; */
    align-items: center;
    
}

.navbar-logo{
    font-weight: 500;
    color: white;
    margin: 1rem;
    margin-left: 0.75rem;
    font-size: x-large;
}

.nav-menu {
    /* flex:auto; */
    flex-wrap: wrap;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5rem;
    justify-content: center;
}
.nav-item{
    margin-right: 1.25rem;
}
.nav-item:hover{
    color: white;
}
.hireme{
    display: inline-flex;
    align-items: center;
    --tw-bg-opacity: 1;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    border-width: 0px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}


@media (min-width: 768px){
    .navbar{
        position: sticky;
    }
    .navbar-container {
        flex-direction: row;
    }

    .navbar-logo{
        margin-bottom: 0px;
    }
    
    .nav-menu{
        margin-right: auto;
        margin-left: 1rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 1rem;
        border-left-width: 1px;
        --tw-border-opacity: 1;
        border-color: rgba(55, 65, 81, var(--tw-border-opacity));
    }
}








// about.css


.about-container{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    flex-direction: column;
    align-items: center;
}
.about-menu{
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    align-items: center;
    text-align: center;
    float: left;
}

.introduction-text{
    color: lightblue;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
    font-weight: 500;

}

.introduction-text1{
    overflow: hidden;
}

.description-text{
    margin-bottom: 2rem;
    line-height: 1.625;
}

.about-buttons{
    display: flex;
    justify-content: center;
}

.about-button-work-with{
    display: inline-flex;
    color: white;
    background-color: rgb(0, 153, 255);
    font-weight: 500;
    border-width: 0px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.25rem;
    font-size: large;
}

.about-button-work-with:focus{
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.about-button-work-with:hover{
    --tw-bg-opacity: 1;
    background-color: rgba(29, 78, 216, var(--tw-bg-opacity));
}

.about-button-past-work{
    margin-left: 1rem;
    display: inline-flex;
    font-weight: 400;
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
    --tw-bg-opacity: 1;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    border-width: 0px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.25rem;
    font-size: large;
}

.about-button-past-work:focus{
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.about-button-past-work:hover{
    color: white;
}

.image-on-right-side-about-section{
    width: 83.3333%;
}

.cartoon-image{
    object-fit: cover;
    object-position: center;
    border-radius: 0.25rem;
    float:right;
    margin-right: 5rem;
}



@media (min-width: 640px) {
    .introduction-text{
        font-size: 2.25rem;
        line-height: 2.5rem;
    }
}

 @media (min-width: 768px){
    .about-container{
        flex-direction: row;
    }

    .about-menu{
        width: 50%;
        padding-right: 4rem;
        align-items: flex-start;
        text-align: left;
        margin-bottom: 0rem;
    }
    .image-on-right-side-about-section{
        width: 50%;
    }
 }

 @media (min-width: 1024px){
     .about-menu{
        flex-grow: 1;
        padding-right: 6rem;
     }
     .introduction-text1{
         display: inline-block;
     }

     .image-on-right-side-about-section{
        max-width: 32rem;
        width: 100%;
     }
 }