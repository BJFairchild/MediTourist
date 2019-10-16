import React, { Component } from 'react'

class ProcedureSelect extends Component{



    render(){
        return(
            <form onSubmit={this.props.handleScrapeForCountryChoices}>
            <label>Select Procedure</label>
            <select
              value={this.props.procedure}
              onChange={this.props.handleProcedureChange}
            >
              <option>Select Procedure</option>
              <option value="08995breast-reduction">Breast Reduction</option>
              <option value="06995rhinoplasty">Rhinoplasty</option>
              <option value="07655facelift">Facelift</option>
              <option value="07485tummy-tuck-abdominoplasty">Tummy Tuck</option>
              <option value="06595eyelid-surgery">Eyelid Surgery</option>
              <option value="08495breast-implants">Breast Implants</option>
              <option value="02995liposuction">Liposuction</option>
              <option value="08995breast-lift">Breast Lift</option>
              <option value="05785male-breast-reduction">Male Breast Reduction</option>
              <option value="04995otoplasty">Otoplasty</option>
              <option value="08995arm-lift">Arm Lift</option>
              <option value="09995breast-reconstruction">Breast Reconstruction</option>
              <option value="06995neck-lift">Neck Lift</option>
              <option value="04985brow-lift">Brow Lift</option>
              <option value="08995thigh-lift">Thigh Lift</option>
              <option value="04995breast-augmentation">Breast Augmentation</option>
              <option value="16995body-lift">Body Lift</option>
              <option value="12995buttock-implants">Buttock Implants</option>
              <option value="09500butt-lift">Butt Lift</option>
              <option value="04400labiaplasty">Labiaplasty</option>
              <option value="05000lip-augmentation">Lip Augmentation</option>
              <option value="04995facial-fat-transfer">Facial Fat Transfer</option>
              <option value="03395chin-augmentation">Chin Augmentation</option>
              <option value="05995breast-implant-revision">
                Breast Implant Revision
              </option>
              <option value="04400cheek-augmentation">Cheek Augmentation</option>
              <option value="08995jaw-shaping">Jaw Shaping</option>
              <option value="02500lip-reduction">Lip Reduction</option>
              <option value="03995nipple-correction-surgery">
                Nipple Correction Surgery
              </option>
              <option value="05995calf-implants">Calf Implants</option>
              <option value="03500nipple-reduction">Nipple Reduction</option>
              <option value="10000mommy-makeover">Mommy Makeover</option>
              <option value="06250hairline-lowering-surgery">
                Hairline Lowering Surgery
              </option>
              <option value="08500breast-implant-removal">
                Breast Implant Removal
              </option>
              <option value="04285double-eyelid-creation">
                Double Eyelid Creation
              </option>
              <option value="04150perineoplasty">Perineoplasty</option>
              <option value="03775areola-reduction">Aereola Reduction</option>
              <option value="16000belt-lipectomy">Belt Lipectomy</option>
              <option value="08000pectoral-implants">Pectoral Implants</option>
              <option value="07995tracheal-shave">Tracheal Shave</option>
              <option value="08500breast-capsulectomy">Breast Capsulectomy</option>
              <option value="07500cleft-lip-or-palate-repair">
                Cleft Lip or Palate Repair
              </option>
              <option value="08995facial-feminization-surgery">
                Facial Feminization Surgery
              </option>
              <option value="06250calf-reduction">Calf Reduction</option>
              <option value="06375cheekbone-reduction">Cheekbone Reduction</option>
              <option value="04000dimple-creation-surgery">
                Dimple Creation Surgery
              </option>
              <option value="12025clitoral-hood-reduction">
                Clitoral Hood Reduction
              </option>
              <option value="24000sex-reassignment-surgery-male-to-female">
                Sex Reassignment Surgery (M -> F)
              </option>
              <option value="13000penis-augmentation">Penis Augmentation</option>
              <option value="04000sweat-gland-suction">Sweat Gland Suction</option>
              <option value="50000sex-reassignment-surgery-female-to-male">
                Sex Reassignment Surgery (F -> M)
              </option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default ProcedureSelect