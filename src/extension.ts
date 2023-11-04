// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { debug } from 'console';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "savetoscrapbox" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(
		vscode.commands.registerCommand('savetoscrapbox.save', async () => {
			vscode.window.showInformationMessage('Save to Scrapbox.');
	
			const config = vscode.workspace.getConfiguration('savetoscrapbox');
			const projects = config.get<string>('projects')?.trim();
			const footer = config.get<string>('footer');
			if (projects !== undefined){
				const projectArr = projects.split(',');
				let result : string | undefined;
				if (projectArr.length === 1){
					result = projectArr[0];
				} else {
					result = await vscode.window.showQuickPick(projectArr, {
						placeHolder: 'Which project would you like save to ?',
					});
				}

				// Check result.
				if (result) {
					// Complete!
					//Get Title
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						return;
					}
	
					var selection = editor.selection;
					var text = editor.document.getText(selection).trim();
					if (text === ''){
						text = editor.document.getText().trim();
					}
	
					if (text !== ''){

						// var replaceAll = (str:string, before:string, after:string) => {
						// 	var i = str.indexOf(before);
						// 	if (i === -1) {return str;}
						// 	var result = str.slice(0, i) + after;
						// 	var j = str.indexOf(before, i+before.length);
						// 	while (j !== -1) {
						// 	  result += str.slice(i+before.length, j) + after;
						// 	  i = j;
						// 	  j = str.indexOf(before, i+before.length);
						// 	}
						// 	return result + str.slice(i+before.length);
						//   };

						// const title = encodeURI(text.split('\n')[0].trim()).replace(/#/g,'%23').replace(/&/g,'%26');
						// const body = encodeURI(text.replace(/\r\n/g,'\n') + `\n${footer}`).replace(/#/g,'%23').replace(/&/g,'%26');
						const title = encodeURI(text.split('\n')[0].trim()).replaceAll('#','%23').replaceAll('&','%26');
						const body = encodeURI(text.replace(/\r\n/g,'\n') + `\n${footer}`).replaceAll('#','%23').replaceAll('&','%26');
						//Save to Scrapbox
						const scrapboxurl = `https://scrapbox.io/${result}/${title}?body=${body}`;
						vscode.commands.executeCommand('vscode.open', scrapboxurl);
					}else{
						vscode.window.showInformationMessage('There is no text.');	
					}
				} else {
					// Cancel
				}
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('savetoscrapbox.config', async () => {
			vscode.commands.executeCommand(
				'workbench.action.openSettings',
				'savetoscrapbox'
			);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('savetoscrapbox.open', async () => {
			const config = vscode.workspace.getConfiguration('savetoscrapbox');
			const projects = config.get<string>('projects')?.trim();
			if (projects !== undefined){
				const projectArr = projects.split(',');
				let result : string | undefined;
				if (projectArr.length === 1){
					result = projectArr[0];
				} else {
					result = await vscode.window.showQuickPick(projectArr, {
						placeHolder: 'Which project would you like open ?',
					});
				}

				// Check result.
				if (result) {
					//Open Scrapbox
					const scrapboxurl = `https://scrapbox.io/${result}/`;
					vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(scrapboxurl));					
				} else {
					// Cancel
				}
			}

		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('savetoscrapbox.new', async () => {
			const config = vscode.workspace.getConfiguration('savetoscrapbox');
			const projects = config.get<string>('projects')?.trim();
			if (projects !== undefined){
				const projectArr = projects.split(',');
				let result : string | undefined;
				if (projectArr.length === 1){
					result = projectArr[0];
				} else {
					result = await vscode.window.showQuickPick(projectArr, {
						placeHolder: 'Which project would you like to create on ?',
					});
				}

				// Check result.
				if (result) {
					//Open Scrapbox
					const scrapboxurl = `https://scrapbox.io/${result}/new`;
					vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(scrapboxurl));					
				} else {
					// Cancel
				}
			}

		})
	);

}

// this method is called when your extension is deactivated
export function deactivate() {}
