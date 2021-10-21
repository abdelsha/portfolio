import classes from './Skills.module.css';

function Skills () {
    return (
      <div className={classes.main}>
        <div className={classes.Layout}>
          <h1>My Skills</h1>
          <div className={classes.CommonCard}>
              <div className={classes.Skills}>
                <li> Circuit Design and Analysis Language:
                    <li>C, Embedded C, C++</li> 
                    <li>Python, Java, System Verilog </li> 
                </li>               
                <li>
                    Embedded Systems:
                    <li>Quartus II</li> 
                    <li>MPLAB X IDE</li> 
                </li>
                <li>
                    Tools and FrameWorks
                    <li>Altium Designer, Spice Simulation, Inventor</li> 
                    <li>Alteryx, Tableau, Cadence Virtuoso</li> 
                    <li>Autodesk Inventor, MATLAB, Simulink</li> 
                </li>
                
              </div>
              <div className={classes.Skills}>
                  <li>
                      Coding Languages
                      <li>
                        JSX
                      </li>
                      <li>HTML</li>
                      <li>React</li>
                  </li>
                  <li style={{"list-style-type":"none"}}>
                      
                      <li>

                      </li>
                  </li>
                  <li style={{"list-style-type":"none"}}>
                      <li>

                      </li>
                  </li>
              </div>
              
          </div>
        </div>
      </div>
    );
}
export default Skills; 