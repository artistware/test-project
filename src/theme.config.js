// const isDev = process.env.NODE_ENV === 'production' ? false : true;
module.exports = {
  palette: ['red', '#000', 'rgb(255, 0, 9)'], // TODO? how should i intake rgb, allow opacity?, allow gradient?
  postTypes: ['skill', 'project', 'reference'], // TODO? does this need obj
  populate: {
    themeSettings: true // TODO this
    // should be exported with timestamp at creation, 
    // must have key validation to prevent some accidental hackery during import
    // a git checkout during build would reveal this file based off naming convention
    // themeSettings_timestamp.tgz would be generated... the formal version for this process
    // should be just named themeSettings.tgz and committed to theme or project files\
    // project files always override in these cases
    // there could be a compatibility check between theme and user themeSettings.tgz
  }
}
