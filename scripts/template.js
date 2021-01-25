// the ready-made html template(from vscode)

export const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`

export default function create_template(code){
    code.value = template // update the code with the template
}