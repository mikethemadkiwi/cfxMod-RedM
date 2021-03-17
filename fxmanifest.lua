-- 
-- CFX
--
fx_version "cerulean"
games { 'rdr3', 'gta5' }
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
-- 
-- INFORMATION
--
author 'ExampleAuthor'
description 'Mod Template. Edit The FXMANIFEST!'
version '1.0.0'
-- 
-- DEPENDANCIES
--
dependencies {
    'yarn'
}
--
-- REQUIRED FILES
--
files {
    'data/data.json',
    'nui/ui.html',
    'nui/ls.html',
    'nui/ui.css',
    'nui/ui.js'
}
-- 
-- CLIENT SCRIPTS
--
client_scripts {
	'client.js'
    -- 'client.lua'
}
-- 
-- SERVER SCRIPTS
--
server_script {
	'server.js'
    -- 'server.lua'
}
-- --
-- -- EXPORTS
-- --
-- exports {
-- 	'exportedclientfunction'
-- }
-- server_exports {
-- 	'exportedserverfunction'
-- }
-- 
-- HTML UI
-- ui_page "nui/ui.html"
--
-- LOADSCREEN UI 
-- loadscreen 'nui/ls.html'
--