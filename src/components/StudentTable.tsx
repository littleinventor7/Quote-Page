import { useState } from 'react';
import {data} from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

function StudentTable(){
  const [randomIndex, setRandomIndex] = useState<number>(Math.floor(Math.random() * data.length));
  const [randomItem, setRandomItem] = useState(data[randomIndex]);
  function handleSubmit(){
    const newIndex = Math.floor(Math.random() * data.length);
    setRandomIndex(newIndex);
    setRandomItem(data[newIndex]);
  }
    return(
    <><TableContainer component={Paper} sx={{
        display: 'flex',
        justifyContent: 'center',
       margin: 'auto',
        marginTop: '50px',
        border: 2,
        width: 800,
        height:400
      }}>
        <Table size="small">
          <TableHead>
            <TableRow>

              <TableCell sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto', marginTop: "5px", fontSize: '25px' // Centers horizontally within its parent
        }}>The Quote is :</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ display: 'flex',
        justifyContent: 'center', margin: 'auto' , marginTop: "150px", fontSize: '25px' }}>{randomItem.quote}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button  onClick={handleSubmit} variant="contained" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto', // Centers horizontally within its parent
        marginTop: '50px',
        width: 300,
      }}>Clik here</Button>
      
      </>
    )
} 
export default StudentTable;
