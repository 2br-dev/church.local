<?php
/* Smarty version 3.1.39, created on 2022-11-30 13:19:57
  from 'D:\Projects\Hosts\church.local\release\manager\templates\default\element\tv\renders\inputproperties\image.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_63872e4dcfa0c3_58109539',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'bfee7101ab98a5f362df1734a14c639fecd6d779' => 
    array (
      0 => 'D:\\Projects\\Hosts\\church.local\\release\\manager\\templates\\default\\element\\tv\\renders\\inputproperties\\image.tpl',
      1 => 1622181878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_63872e4dcfa0c3_58109539 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="tv-input-properties-form<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
"></div>


<?php echo '<script'; ?>
>
// <![CDATA[
var params = {
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['params']->value, 'v', false, 'k', 'p', array (
  'last' => true,
  'iteration' => true,
  'total' => true,
));
$_smarty_tpl->tpl_vars['v']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->do_else = false;
$_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['iteration'] === $_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['total'];
?>
 '<?php echo $_smarty_tpl->tpl_vars['k']->value;?>
': '<?php echo strtr($_smarty_tpl->tpl_vars['v']->value, array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
'<?php if (!(isset($_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['last'] : null)) {?>,<?php }
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
};
var oc = {'change':{fn:function(){Ext.getCmp('modx-panel-tv').markDirty();},scope:this}};

var element = Ext.getCmp('modx-tv-elements');
if (element) {
  element.hide();
}

MODx.load({
    xtype: 'panel'
    ,layout: 'form'
    ,autoHeight: true
    ,cls: 'form-with-labels'
    ,labelAlign: 'top'
    ,border: false
    ,items: [{
        xtype: 'combo-boolean'
        ,fieldLabel: _('required')
        ,description: MODx.expandHelp ? '' : _('required_desc')
        ,name: 'inopt_allowBlank'
        ,hiddenName: 'inopt_allowBlank'
        ,id: 'inopt_allowBlank<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,width: 200
        ,value: (params['allowBlank']) ? !(params['allowBlank'] === 0 || params['allowBlank'] === 'false') : true
        ,listeners: oc
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_allowBlank<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('required_desc')
        ,cls: 'desc-under'
    }]
    ,renderTo: 'tv-input-properties-form<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
});
// ]]>
<?php echo '</script'; ?>
>

<?php }
}