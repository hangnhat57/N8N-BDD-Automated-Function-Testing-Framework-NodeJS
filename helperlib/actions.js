import { browser, by, protractor } from 'protractor';
import { getElementFinder, sleep, log } from './utils';
import { waitToBeDisplayed } from './waits';

const DEFAULT_RETRIES = 2;
const DEFAULT_TIMEOUT = 20;


export function click(target, timeout = DEFAULT_TIMEOUT, tryCount = DEFAULT_RETRIES) {
	const e = getElementFinder (target);
	return waitToBeDisplayed (target, timeout)
		.then (() => {
			return browser.wait (
				protractor.ExpectedConditions.elementToBeClickable(e),
				timeout,
				`Element ${e.locator ()} not clickable`
			);
		})
		.then (() => e.click ())
		.then (
			() => {}, (error) => {
				if (tryCount > 0) {
					console.log (`Click error: ${error}`);
					console.log (`Click retry ${tryCount} on target ${e.locator ()}`);
					tryCount -= 1;
					click (target, timeout, tryCount);
				} else {
					console.error (`Error while clicking on ${e.locator ()}`);
					throw error;
				}
			}
		);
}

export function hover(target, timeout = DEFAULT_TIMEOUT) {
	const e = getElementFinder (target);
	return waitToBeDisplayed (target, timeout)
		.then (() => {
			return browser.actions().mouseMove(e).perform();
		})
		.catch (() => {
			log ('Fallback for hover element');
			return browser.executeScript ((element) => {
				const event = new MouseEvent ('mouseenter', {
					view: window,
					bubbles: true,
					cancelable: true,
				});
				element.dispatchEvent (event);
			}, e);
		})
		.then (() => {
			return sleep (500);
		});
}

export function sendKeys(target, value, timeout = DEFAULT_TIMEOUT, tryCount = DEFAULT_RETRIES) {
	const e = getElementFinder (target);
	return waitToBeDisplayed (target, timeout)
		.then (() => {
			return e.clear ();
		})
		.then (
			() => {
				e.sendKeys (value);
			},
			(error) => {
				if (tryCount > 0) {
					console.log (error);
					console.log (`Send keys retry ${tryCount} on target ${e.locator ()}`);
					tryCount = tryCount - 1;
					sendKeys (target, value, timeout, tryCount);
				} else {
					console.error (`Error while sending keys on ${e.locator ()}`);
					throw error;
				}
			}
		);
}


export function selectOption(option, timeout = DEFAULT_TIMEOUT) {
	return click (option);
}


export function selectOptionByText(select, text, timeout = DEFAULT_TIMEOUT) {
	const e = getElementFinder (select);
	const option = e.element (by.cssContainingText ('option', text));
	return selectOption (option, timeout);
}


export function selectOptionByIndex(select, index, timeout = DEFAULT_TIMEOUT) {
	const e = getElementFinder (select).all(by.tagName ('option')).get(index);
	return selectOption (e, timeout);
}
