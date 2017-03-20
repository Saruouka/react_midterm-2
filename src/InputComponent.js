import React, {Component, PropTypes} from 'react';
import {ScoreComponent} from './ScoreComponent';
import {SortComponent} from './SortComponent';
export class InputComponent extends Component 
{
  static propTypes = {
      partText: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
        gpax: 0,onet01: 0,onet02: 0,onet03: 0,onet04: 0,onet05: 0,gat:0,pat1: 0,pat2: 0,pat3: 0,pat4: 0,pat5: 0,pat6: 0,pat7: 0,
        total: 0,
        faculty:'',
        checkPass:'',
        leastPoint: 0,
        criteria:''
    }
    this.ScoreCalc = this.ScoreCalc.bind(this);
    this.CriteriaText = this.CriteriaText.bind(this);
  }

  ScoreCalc = (event) =>
  {
      var Gpax = parseFloat(this.state.gpax);
      var Onet01 = parseFloat(this.state.onet01);
      var Onet02 = parseFloat(this.state.onet02);
      var Onet03 = parseFloat(this.state.onet03);
      var Onet04 = parseFloat(this.state.onet04);
      var Onet05 = parseFloat(this.state.onet05);
      var Gat = parseFloat(this.state.gat);
      var Pat1 = parseFloat(this.state.pat1);
      var Pat2 = parseFloat(this.state.pat2);
      var Pat3 = parseFloat(this.state.pat3);
      var Pat4 = parseFloat(this.state.pat4);
      var Pat5 = parseFloat(this.state.pat5);
      var Pat6 = parseFloat(this.state.pat6);
      var Pat7 = parseFloat(this.state.pat7);
      var OnetTotal;
      var result;
      var point;

      if(this.state.faculty == "คณะทันตแพทยศาสตร์"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*20) + (Pat1*10) + (Pat2*20);
         point = 21981;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 21981){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะวิศวกรรมศาสตร์"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*15) + (Pat3*20) + (Pat2*15);
         point = 16062;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 16062){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะวิทยาศาสตร์"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*10) + (Pat1*10) + (Pat2*30);
         point = 14840;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 14840){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะเทคโนโลยีสารสนเทศ"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*10) + (Pat1*20) + (Pat2*20);
         point = 12996;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 12996){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะสถาปัตยกรรมศาสตร์"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*10) + (Pat4*40);
         point = 16790;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 16790){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะพาณิชย์ศาสตร์และการบัญชี"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*30) + (Pat1*20);
         point = 14841;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 14841){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะครุศาสตร์"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*10) + (Pat5*20) + (Pat7*20);
         point = 18459;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 18459){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }

      if(this.state.faculty == "คณะศิลปกรรมศาสตร์"){
         OnetTotal=(Onet01*18)+(Onet02*18)+(Onet03*18)+(Onet04*18)+(Onet05*18);
         result = (Gpax*1500) + OnetTotal + (Gat*10) + (Pat6*40);
         point = 15821;
         this.setState({total: result});
         this.setState({leastPoint: point});

         if(result >= 15821){
            this.setState({
                checkPass:'มีโอกาสผ่าน'
            });
         }else{
            this.setState({
                checkPass:'ยังไม่มีโอกาสผ่าน'
            });
         }
      }
  }
  
  GetGpax = (event) =>
  {
      this.setState({gpax: event.target.value});
  }
  GetPat01 = (event) =>
  {
      this.setState({pat1: event.target.value});
  }
  GetPat02 = (event) =>
  {
      this.setState({pat2: event.target.value});
  }
  GetPat03 = (event) =>
  {
      this.setState({pat3: event.target.value});
  }
  GetPat04 = (event) =>
  {
      this.setState({pat4: event.target.value});
  }
  GetPat05 = (event) =>
  {
      this.setState({pat5: event.target.value});
  }
  GetPat06 = (event) =>
  {
      this.setState({pat6: event.target.value});
  }
  GetPat07 = (event) =>
  {
      this.setState({pat7: event.target.value});
  }
  
  GetGat = (event) =>
  {
      this.setState({gat: event.target.value});
  }

  GetOnet01 = (event) =>
  {
      this.setState({onet01: event.target.value});
  }
  GetOnet02 = (event) =>
  {
      this.setState({onet02: event.target.value});
  }
  GetOnet03 = (event) =>
  {
      this.setState({onet03: event.target.value});
  }
  GetOnet04 = (event) =>
  {
      this.setState({onet04: event.target.value});
  }
  GetOnet05 = (event) =>
  {
      this.setState({onet05: event.target.value});
  }
  handleChangeFaculty = (event)=>{
     this.setState({
         faculty:event.target.value
     });
  }

  CriteriaText =(event)=>{
      if(this.state.faculty == "คณะทันตแพทยศาสตร์"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 20% | PAT1 10% | PAT2 20%'
          });  
      }
      if(this.state.faculty == "คณะวิศวกรรมศาสตร์"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 10% | PAT2 15% | PAT3 20%'
          });  
      }
      if(this.state.faculty == "คณะวิทยาศาสตร์"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 10% | PAT1 10% | PAT2 30%'
          });  
      }
      if(this.state.faculty == "คณะเทคโนโลยีสารสนเทศ"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 10% | PAT1 20% | PAT2 20%'
          });  
      }
      if(this.state.faculty == "คณะสถาปัตยกรรมศาสตร์"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 10% | PAT4 40%'
          });  
      }
      if(this.state.faculty == "คณะพาณิชย์ศาสตร์และการบัญชี"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 30% | PAT1 20%'
          });  
      }
      if(this.state.faculty == "คณะครุศาสตร์"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 10% | PAT5 20% | PAT7 20%'
          });  
      }
      if(this.state.faculty == "คณะศิลปกรรมศาสตร์"){
          this.setState({
         criteria:'GPAX 20% | ONET 30% | GAT 10% | PAT6 40%'
          });  
      }
  }


  render() 
  {
    let {total,faculty,checkPass,leastPoint,criteria} = this.state;


    this.CriteriaText();

    return (   
      <div className="test">
          <div className="row">
              <div className="col-md-12 App-headpart test">
                    {this.props.partText}
              </div>
              
              <div className="col-md-4"></div>
              <div className="col-md-4">
                  เลือกคณะที่ต้องการเทียบคะแนน <br/>
                  <select name="SelectFaculty" onChange={this.handleChangeFaculty}>
                      <option value="">เลือกคณะที่ต้องการ</option>
                      <option value="คณะทันตแพทยศาสตร์">คณะทันตแพทยศาสตร์</option>
                      <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                      <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                      <option value="คณะเทคโนโลยีสารสนเทศ">คณะเทคโนโลยีสารสนเทศ</option>
                      <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                      <option value="คณะพาณิชย์ศาสตร์และการบัญชี">คณะพาณิชย์ศาสตร์และการบัญชี</option>
                      <option value="คณะครุศาสตร์">คณะครุศาสตร์</option>
                      <option value="คณะศิลปกรรมศาสตร์">คณะศิลปกรรมศาสตร์</option>
                  </select>
              </div>
              <div className="col-md-12">
                  <center><h2>{faculty}</h2></center>
                  {criteria}
              </div>
              
          </div>
          <div className="row App-box">
              <form action="">
              <div className="col-md-6 App-content">
                
                    GPAX (ไม่เกิน 4.00)
                    <center><input type="number" min="1" max="4" required onChange={this.GetGpax} placeholder="GPAX" className="form-control"/></center>
                    Onet (คะแนนเต็ม 100)
                    <center>
                        <input type="number" onChange={this.GetOnet01} placeholder="01 ภาษาไทย" className="form-control"/>
                        <input type="number" onChange={this.GetOnet02} placeholder="02 สังคม" className="form-control"/>
                        <input type="number" onChange={this.GetOnet03} placeholder="03 ภาษาอังกฤษ" className="form-control"/>
                        <input type="number" onChange={this.GetOnet04} placeholder="04 คณิตศาสตร์" className="form-control"/>
                        <input type="number" onChange={this.GetOnet05} placeholder="05 วิทยาศาสตร์" className="form-control"/>
                    </center>
                    GAT (คะแนนเต็ม 300)
                    <center><input type="number" onChange={this.GetGat} placeholder="GAT" className="form-control"/></center>
                </div>
                <div className="col-md-6 App-content">
                    PAT (คะแนนเต็ม 300)
                    <center>
                        <input type="number" onChange={this.GetPat01} placeholder="PAT1 คณิตศาสตร์" className="form-control"/>
                        <input type="number" onChange={this.GetPat02} placeholder="PAT2 วิทยาศาสตร์" className="form-control"/>
                        <input type="number" onChange={this.GetPat03} placeholder="PAT3 วิศวกรรม" className="form-control"/>
                        <input type="number" onChange={this.GetPat04} placeholder="PAT4 สถาปัตยกรรม" className="form-control"/>
                        <input type="number" onChange={this.GetPat05} placeholder="PAT5 วิชาชีพครู" className="form-control"/>
                        <input type="number" onChange={this.GetPat06} placeholder="PAT6 ศิลปกรรม" className="form-control"/>
                        <input type="number" onChange={this.GetPat07} placeholder="PAT7 ความถนัดทางภาษา" className="form-control"/>
                    </center>
                </div>
                <div className="col-md-12 App-content">
                
                <button type="button" onClick={this.ScoreCalc} className="btn btn-primary">คำนวณ</button>
                <br/>
              </div>
              </form>
          </div>
         <ScoreComponent partText="ส่วนที่2 - คะแนนที่ได้" showScore={total}/>                          
         <SortComponent partText="ส่วนที่3 - ผลการเทียบคะแนน" checkPass={checkPass} checkFaculty={faculty} AddLeastPoint={leastPoint}/>


      </div>
    );
  }
}