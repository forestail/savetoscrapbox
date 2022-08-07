# SaveToScrapbox


SaveToScrapbox is a VSCode extension to save the text you are editing on VSCode to Scrapbox (https://scrapbox.io/) .

## Features

### Save selected or all text on VSCode to Scrapbox
On the VSCode edit screen, select the text you wish to save to Scrapbox and execute the `SaveToScrapbox:Save` command. \
And a list of projects to save to will be displayed on the command palette. Enter or select the name of the project you wish to save to. \
Then the default browser will open the saved Scrapbox article, so please make additional edits if necessary.

If you execute the above command without selecting anything on the editor, all text in the screen you are editing will be saved to Scrapbox.


The key bindings for the above command are assigned to `Ctrl+Alt+S` (Windows) and `Cmd+Ctrl+S` (Mac) by default.

![SaveToScrapbox:Save](images/savetoscrapbox_save.gif)

### Open Scrapbox project's top page
To simply open the top page of each project in Scrapbox without saving the text, execute the command `SaveToScrapbox:Open`.

### Create new page into Scrapbox project
To create new page into Scrapbox project, execute the command `SaveToScrapbox:New`.

## Requirements

You must be logged into Scrapbox with your default browser.


## Extension Settings

To use this extension, you must first configure the following settings.

Run the `SaveToScrapbox:Config` command to display the settings screen for this extension, and set the following items appropriately.

| Item | Description |
|------|-------------------|
| Footer | The common string to be given at the end of the saved text. A link format one is useful, for it will be able to consolidate copied contents from VSCode.  |
| Projects | Enter the name of the Scrapbox project (the string in the project name portion of the URL) where you want to save the text. If there are multiple projects, enter them separated by commas (,).  |


![SaveToScrapbox:Config](images/savetoscrapbox_config.gif)


## Known Issues



## Release Notes

See [CHANGELOG.md](./CHANGELOG.md).


