import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'



class ProcedureSelect extends Component{



    render(){
        return(
            <form onSubmit={this.props.handleScrapeForCountryChoices}>
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



              // let procedureOptions = [
              // {key: "08995breast-reduction", value: "08995breast-reduction", text: "Breast Reduction"},
              // {key: "06995rhinoplasty">Rhinoplasty" },
              // {key: "07655facelift">Facelift" },
              // {key: "07485tummy-tuck-abdominoplasty">Tummy Tuck" },
              // {key: "06595eyelid-surgery">Eyelid Surgery" },
              // {key: "08495breast-implants">Breast Implants" },
              // {key: "02995liposuction">Liposuction" },
              // {key: "08995breast-lift">Breast Lift" },
              // {key: "04995otoplasty">Otoplasty" },
              // {key: "08995arm-lift">Arm Lift" },
              // {key: "09995breast-reconstruction">Breast Reconstruction" },
              // {key: "06995neck-lift">Neck Lift" },
              // {key: "04985brow-lift">Brow Lift" },
              // {key: "08995thigh-lift">Thigh Lift" },
              // {key: "04995breast-augmentation">Breast Augmentation" },
              // {key: "16995body-lift">Body Lift" },
              // {key: "12995buttock-implants">Buttock Implants" },
              // {key: "09500butt-lift">Butt Lift" },
              // {key: "04400labiaplasty">Labiaplasty" },
              // {key: "05000lip-augmentation">Lip Augmentation" },
              // {key: "04995facial-fat-transfer">Facial Fat Transfer" },
              // {key: "03395chin-augmentation">Chin Augmentation" },
              // {key: "05995breast-implant-revision">
              //   Breast Implant Revision
              // " },
              // {key: "04400cheek-augmentation">Cheek Augmentation" },
              // {key: "08995jaw-shaping">Jaw Shaping" },
              // {key: "02500lip-reduction">Lip Reduction" },
              // {key: "03995nipple-correction-surgery">
              //   Nipple Correction Surgery
              // " },
              // {key: "05995calf-implants">Calf Implants" },
              // {key: "03500nipple-reduction">Nipple Reduction" },
              // {key: "10000mommy-makeover">Mommy Makeover" },
              // {key: "06250hairline-lowering-surgery">
              //   Hairline Lowering Surgery
              // " },
              // {key: "08500breast-implant-removal">
              //   Breast Implant Removal
              // " },
              // {key: "04285double-eyelid-creation">
              //   Double Eyelid Creation
              // " },
              // {key: "04150perineoplasty">Perineoplasty" },
              // {key: "03775areola-reduction">Aereola Reduction" },
              // {key: "16000belt-lipectomy">Belt Lipectomy" },
              // {key: "08000pectoral-implants">Pectoral Implants" },
              // {key: "08995facial-feminization-surgery">
              //   Facial Feminization Surgery
              // " },
              // {key: "06250calf-reduction">Calf Reduction" },
              // {key: "06375cheekbone-reduction">Cheekbone Reduction" },
              // {key: "04000dimple-creation-surgery">
              //   Dimple Creation Surgery
              // " },
              // {key: "12025clitoral-hood-reduction">
              //   Clitoral Hood Reduction
              // " },
              // {key: "24000sex-reassignment-surgery-male-to-female">
              //   Sex Reassignment Surgery (M -> F)
              // " },
              // {key: "13000penis-augmentation">Penis Augmentation" },
              // {key: "50000sex-reassignment-surgery-female-to-male">
              //   Sex Reassignment Surgery (F -> M)
              // " }]