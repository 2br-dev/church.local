<?php

class migxUpdateProcessor extends modProcessor {

    public function process() {
        $modx = &$this->modx;
        $scriptProperties = $this->getProperties();

        $task=$modx->migx->getTask();
        //$filename = basename(__file__);
        $filename = 'update.php';
        $processorspath = dirname(dirname(__file__)). '/' ;
        $updateerror=false;
        $filenames = array();
        $message = '';
        
        $data = $modx->getOption('data',$scriptProperties,'');
        $data = $modx->fromJson($data);
        
        if (isset($data['migx_selectorgrid_value'])){
          $filename = str_replace('.php','_selectfromgrid.php',$filename);    
        }
       
        if ($processor_file = $modx->migx->findProcessor($processorspath,$filename,$filenames)){
            include_once ($processor_file);    
        }
        
        if ($updateerror){
            return $modx->error->failure($errormsg);	
        }
        
        return $modx->error->success($message,$object);        

        //return $this->outputArray($rows, $count);
    }
}

return 'migxUpdateProcessor';
