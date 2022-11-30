<?php
/* Smarty version 3.1.39, created on 2022-11-30 14:34:11
  from 'D:\Projects\Hosts\church.local\release\manager\templates\default\element\tv\renders\input\listbox-multiple.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_63873fb34e9b71_10244661',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a7bd65c81cf60a316eb64e074804c252697d4b9a' => 
    array (
      0 => 'D:\\Projects\\Hosts\\church.local\\release\\manager\\templates\\default\\element\\tv\\renders\\input\\listbox-multiple.tpl',
      1 => 1622181878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_63873fb34e9b71_10244661 (Smarty_Internal_Template $_smarty_tpl) {
?><select id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
[]"
    multiple="multiple"
    onselect="MODx.fireResourceFormChange();"
    onchange="MODx.fireResourceFormChange();"
    size="8"
>
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['opts']->value, 'item');
$_smarty_tpl->tpl_vars['item']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->do_else = false;
?>
    <option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['value'];?>
" <?php if ($_smarty_tpl->tpl_vars['item']->value['selected']) {?> selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['item']->value['text'];?>
</option>
<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
</select>



<?php echo '<script'; ?>
>
// <![CDATA[

Ext.onReady(function() {
    var fld = new Ext.ux.form.SuperBoxSelect({
    
        xtype:'superboxselect'
        ,transform: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,id: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,triggerAction: 'all'
        ,mode: 'local'
        ,extraItemCls: 'x-tag'
        ,expandBtnCls: 'x-form-trigger'
        ,clearBtnCls: 'x-form-trigger'
        ,width: 400
        ,displayField: "text"
        ,valueField: "value"
        ,resizable: true
        ,allowBlank: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 1 || $_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 'true') {?>true<?php } else { ?>false<?php }?>

        <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['title'])===null||$tmp==='' ? '' : $tmp)) {?>,title: '<?php echo (($tmp = @$_smarty_tpl->tpl_vars['params']->value['title'])===null||$tmp==='' ? '' : $tmp);?>
'<?php }?>
        <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['listWidth'])===null||$tmp==='' ? '' : $tmp)) {?>,listWidth: <?php echo (($tmp = @$_smarty_tpl->tpl_vars['params']->value['listWidth'])===null||$tmp==='' ? '' : $tmp);
}?>
        ,maxHeight: <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['maxHeight'])===null||$tmp==='' ? '' : $tmp)) {
echo (($tmp = @$_smarty_tpl->tpl_vars['params']->value['maxHeight'])===null||$tmp==='' ? '' : $tmp);
} else { ?>300<?php }?>
        <?php if ($_smarty_tpl->tpl_vars['params']->value['typeAhead'] == 1 || $_smarty_tpl->tpl_vars['params']->value['typeAhead'] == 'true') {?>
            ,typeAhead: true
            ,typeAheadDelay: <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['typeAheadDelay'])===null||$tmp==='' ? '' : $tmp) && (($tmp = @$_smarty_tpl->tpl_vars['params']->value['typeAheadDelay'])===null||$tmp==='' ? '' : $tmp) != '') {
echo (($tmp = @$_smarty_tpl->tpl_vars['params']->value['typeAheadDelay'])===null||$tmp==='' ? '' : $tmp);
} else { ?>250<?php }?>
            ,editable: true
        <?php } else { ?>
            ,typeAhead: false
        <?php }?>
        <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['listEmptyText'])===null||$tmp==='' ? '' : $tmp)) {?>
            ,listEmptyText: '<?php echo (($tmp = @$_smarty_tpl->tpl_vars['params']->value['listEmptyText'])===null||$tmp==='' ? '' : $tmp);?>
'
        <?php }?>
        ,allowAddNewData: <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['forceSelection'])===null||$tmp==='' ? '' : $tmp) && (($tmp = @$_smarty_tpl->tpl_vars['params']->value['forceSelection'])===null||$tmp==='' ? '' : $tmp) != 'false') {?>false<?php } else { ?>true<?php }?>
        ,addNewDataOnBlur: true
        ,stackItems: <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['stackItems'])===null||$tmp==='' ? '' : $tmp) && (($tmp = @$_smarty_tpl->tpl_vars['params']->value['stackItems'])===null||$tmp==='' ? '' : $tmp) != 'false') {?>true<?php } else { ?>false<?php }?>
        ,msgTarget: 'under'

        
        ,listeners: {
            'select': {fn:MODx.fireResourceFormChange, scope:this}
            ,'beforeadditem': {fn:MODx.fireResourceFormChange, scope:this}
            ,'newitem': {fn:function(bs,v,f) {
                var item = {};
                item[bs.valueField] = v;
                item[bs.displayField] = v;
                bs.addNewItem(item);
                MODx.fireResourceFormChange();
                return true;
            },scope:this}
            ,'beforeremoveitem': {fn:MODx.fireResourceFormChange, scope:this}
            ,'clear': {fn:MODx.fireResourceFormChange, scope:this}
        }
    });
    Ext.getCmp('modx-panel-resource').getForm().add(fld);
});

// ]]>
<?php echo '</script'; ?>
>
<?php }
}
