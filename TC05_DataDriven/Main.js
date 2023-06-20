function Test(params){
 	Spreadsheet.DoAttach('DataDriven.xlsx');
//     Go through all rows;
    while(Spreadsheet.DoSequential())
    {
        // Read cell value from column 0
        var stt = Spreadsheet.GetCell(0);
        var name = Spreadsheet.GetCell(1);
        var age = Spreadsheet.GetCell(2);
        // Pass it into Logic function
        console.log('Stt: ' + stt + ' Name: ' + name + ' Age: ' + age);
    }
}

g_load_libraries=["Web"]