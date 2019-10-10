import React, { Component } from "react";

class InitialSearchContainer extends Component {
  state = {
      procedure: "",
      us_cost: 0
  };

  handleProcedureChange = (e) => {
    this.setState({
        procedure: e.target.value
    })
  }

handleScrapeForCountryChoices = () => {

}

  render() {
    return (
      <div>
        InitialSearchContainer
        <h2>Welcome, Username</h2>
        <form onSubmit={this.handleScrapeForCountryChoices}>
          <label>Select Procedure</label>
          <select value={this.state.procedure} onChange={this.handleProcedureChange}>
              <option value="breast-reduction">Breast Reduction</option>
              <option value="rhinoplasty">Rhinoplasty</option>
              <option value="facelift">Facelift</option>
              <option value="tummy-tuck-abdominoplasty">Tummy Tuck</option>
              <option value="eyelid-surgery">Eyelid Surgery</option>
              <option value="breast-implants">Breast Implants</option>
              <option value="liposuction">Liposuction</option>
              <option value="breast-lift">Breast Lift</option>
              <option value="male-breast-reduction">Male Breast Reduction</option>
              <option value="otoplasty">Otoplasty</option>
              <option value="wrinkle-treatment">Wrinkle Treatment</option>
              <option value="arm-lift">Arm Lift</option>
              <option value="breast-reconstruction">Breast Reconstruction</option>
              <option value="neck-lift">Neck Lift</option>
              <option value="brow-lift">Brow Lift</option>
              <option value="thigh-lift">Thigh Lift</option>
              <option value="dermal-fillers">Dermal Fillers</option>
              <option value="scar-removal">Scar Removal</option>
              <option value="breast-augmentation">Breast Augmentation</option>
              <option value="body-lift">Body Lift</option>
              <option value="varicose-veins-treatment">Varicose Veins Treatment</option>
              <option value="buttock-implants">Buttock Implants</option>
              <option value="butt-lift">Butt Lift</option>
              <option value="eye-bag-removal">Eye Bag Removal</option>
              <option value="labiaplasty">Labiaplasty</option>
              <option value="lip-augmentation">Lip Augmentation</option>
              <option value="facial-fat-transfer">Facial Fat Transfer</option>
              <option value="chin-augmentation">Chin Augmentation</option>
              <option value="breast-implant-revision">Breast Implant Revision</option>
              <option value="cheek-augmentation">Cheek Augmentation</option>
              <option value="jaw-shaping">Jaw Shaping</option>
              <option value="lip-reduction">Lip Reduction</option>
              <option value="nipple-correction-surgery">Nipple Correction Surgery</option>
              <option value="calf-implants">Calf Implants</option>
              <option value="nipple-reduction">Nipple Reduction</option>
              <option value="mommy-makeover">Mommy Makeover</option>
              <option value="hairline-lowering-surgery">Hairline Lowering Surgery</option>
              <option value="breast-implant-removal">Breast Implant Removal</option>
              <option value="buttock-augmentation">Buttock Augmentation</option>
              <option value="forehead-contouring">Forehead Contouring</option>
              <option value="fat-reduction">Fat Reduction</option>
              <option value="buccal-fat-extraction">Buccal Fat Extraction</option>
              <option value="double-eyelid-creation">Double Eyelid Creation</option>
              <option value="perineoplasty">Perineoplasty</option>
              <option value="lipofilling">Lipofilling</option>
              <option value="mentoplasty">Mentoplasty</option>
              <option value="areola-reduction">Aereola Reduction</option>
              <option value="belt-lipectomy">Belt Lipectomy</option>
              <option value="skin-grafting">Skin Grafting</option>
              <option value="pectoral-implants">Pectoral Implants</option>
              <option value="tracheal-shave">Tracheal Shave</option>
              <option value="breast-capsulectomy">Breast Capsulectomy</option>
              <option value="cleft-lip-or-palate-repair">Cleft Lip or Palate Repair</option>
              <option value="facial-feminization-surgery">Facial Feminization Surgery</option>
              <option value="nipple-augmentation">Nipple Augmentation</option>
              <option value="facial-implants">Facial Implants</option>
              <option value="facial-trauma-surgery">Facial Trauma Surgery</option>
              <option value="reconstructive-surgery-for-burns">Reconstructive Surgery For Burns</option>
              <option value="calf-reduction">Calf Reduction</option>
              <option value="cheekbone-reduction">Cheekbone Reduction</option>
              <option value="dimple-creation-surgery">Dimple Creation Surgery</option>
              <option value="cleft-lip-nasal-deformity-surgery">Cleft Lip Nasal Deformity Surgery</option>
              <option value="clitoral-hood-reduction">Clitoral Hood Reduction</option>
              <option value="male-breast-augmentation">Male Breast Augmentation</option>
              <option value="sex-reassignment-surgery-male-to-female">Sex Reassignment Surgery (M -> F)</option>
              <option value="ear-reconstruction">Ear Reconstruction</option>
              <option value="face-slimming">Face Slimming</option>
              <option value="hip-augmentation">Hip Augmentation</option>
              <option value="cryolipolysis">Cryolipolysis</option>
              <option value="pectus-excavatum-treatment">Pectus Excavatum Treatment</option>
              <option value="penis-augmentation">Penis Augmentation</option>
              <option value="muscle-ablation">Muscle Ablation</option>
              <option value="sweat-gland-suction">Sweat Gland Suction</option>
              <option value="sex-reassignment-surgery-female-to-male">Sex Reassignment Surgery (F -> M)</option>
              <option value="eyebrow-adjustment">Eyebrow Adjustment</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}
}

export default InitialSearchContainer;

{/* <label>Select Destination</label>
<select>
  <option value="austria">Austria</option>
  <option value="belgium">Belgium</option>
  <option value="bosnia-and-herzegovina">Bosnia and Herzegovina</option>
  <option value="brazil">Brazil</option>
  <option value="costa-rica">Costa Rica</option>
  <option value="croatia">Croatia</option>
  <option value="czech-republic">Czech Rebublic</option>
  <option value="dominican-republic">Dominican Republic</option>
  <option value="egypt">Egypt</option>
  <option value="france">France</option>
  <option value="germany">Germany</option>
  <option value="hungary">Hungary</option>
  <option value="india">India</option>
  <option value="israel">Israel</option>
  <option value="italy">Italy</option>
  <option value="jordan">Jordan</option>
  <option value="lebanon">Lebanon</option>
  <option value="lithuania">Lithuania</option>
  <option value="malaysia">Malaysia</option>
  <option value="mexico">Mexico</option>
  <option value="morocco">Morocco</option>
  <option value="philippines">Philippines</option>
  <option value="poland">Poland</option>
  <option value="portugal">Portugal</option>
  <option value="russian-federation">Russian Federation</option>
  <option value="slovakia">Slovakia</option>
  <option value="south-africa">South Africa</option>
  <option value="south-korea">South Korea</option>
  <option value="spain">Spain</option>
  <option value="switzerland">Switzerland</option>
  <option value="thailand">Thailand</option>
  <option value="tunisia">Tunisia</option>
  <option value="turkey">Turkey</option>
  <option value="ukraine">Ukraine</option>
  <option value="united-arab-emirates">United Arab Emirates</option>         <option value="united-kingdom">United Kingdom</option>
</select> */}