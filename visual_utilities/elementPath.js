import { waitToBePresent } from "../browser_utilities";
const shell = require('shelljs');
const globals = new Globals();
const expect = globals.expect;
import * as blueharvest from 'blue-harvest';
import Globals from "../cucumber_support/globals";


/**
 * Path for visual test folders
 * */
let baseLinePath;
let visualReport
async function createPath(){
	 baseLinePath = `${ process.cwd() }/visual-baseline/${ await browser.browserName}/`;
	 visualReport = `${ process.cwd() }/reports/visual-report/${ await browser.browserName}`;
	shell.mkdir('-p', baseLinePath);
	shell.mkdir('-p', visualReport);
}
/**
* Mask web elements then/
* Return List of masking elements
* */
export async function masking(elements){
	let mask = [];
	if(Array.isArray(elements)){
		for(let e in elements){
			await waitToBePresent(e);
			mask.push(
				await blueharvest.addMask(e, 'gray').catch((err)=>{
					console.log(`error: ${err}`)
				})
			);
		}
	}
	else {
		mask.push(
			await blueharvest.addMask(elements, 'gray').catch((err)=>{
				console.log(`error: ${err}`)
			})
		);
	}
	return mask;
}
export async function compareVisual(page,masklist=[]) {
	await createPath();
	let result;
	let data;
	let path;
	path = `${ baseLinePath }${ page }.png`;
	data = await browser.takeScreenshot();
	result = await blueharvest.compareScreenshot(data, path,visualReport);
	if(masklist !== []){
		for(let masked in masklist){
			await blueharvest.removeMask(masked);
		}
	}
	await expect(result).to.be.include('passed',`Page does not lookalike Expect, please see diff in ${visualReport}`);

}


