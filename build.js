const fs = require('fs');
const path = require('path');

const talksDataPath = path.join(__dirname, 'src', 'data', 'talks.json');
const stylesPath = path.join(__dirname, 'src', 'styles.css');
const scriptPath = path.join(__dirname, 'src', 'app.js');
const templatePath = path.join(__dirname, 'src', 'template.html');
const outputPath = path.join(__dirname, 'index.html');

try {
    const talksData = fs.readFileSync(talksDataPath, 'utf8');
    const styles = fs.readFileSync(stylesPath, 'utf8');
    let script = fs.readFileSync(scriptPath, 'utf8');
    let template = fs.readFileSync(templatePath, 'utf8');

    // Inject data into the script
    script = script.replace('<!--DATA-->', talksData);

    // Inject styles and script into the template
    template = template.replace('<!--STYLES-->', styles);
    template = template.replace('<!--SCRIPT-->', script);

    fs.writeFileSync(outputPath, template);

    console.log('Successfully generated index.html');

} catch (error) {
    console.error('Error building the website:', error);
}
