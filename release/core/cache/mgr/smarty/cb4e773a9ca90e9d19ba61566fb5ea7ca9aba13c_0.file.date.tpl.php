<?php
/* Smarty version 3.1.39, created on 2022-11-30 15:31:09
  from 'D:\Projects\Hosts\church.local\release\manager\templates\default\element\tv\renders\inputproperties\date.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_63874d0de94212_53242245',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cb4e773a9ca90e9d19ba61566fb5ea7ca9aba13c' => 
    array (
      0 => 'D:\\Projects\\Hosts\\church.local\\release\\manager\\templates\\default\\element\\tv\\renders\\inputproperties\\date.tpl',
      1 => 1622181878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_63874d0de94212_53242245 (Smarty_Internal_Template $_smarty_tpl) {
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
    ,border: false
    ,labelAlign: 'top'
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
    },{
        xtype: 'textfield'
        ,fieldLabel: _('disabled_dates')
        ,description: MODx.expandHelp ? '' : _('disabled_dates_desc')
        ,name: 'inopt_disabledDates'
        ,id: 'inopt_disabledDates<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['disabledDates'] || ''
        ,anchor: '98%'
        ,listeners: oc
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_disabledDates<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('disabled_dates_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'textfield'
        ,fieldLabel: _('disabled_days')
        ,description: MODx.expandHelp ? '' : _('disabled_days_desc')
        ,name: 'inopt_disabledDays'
        ,id: 'inopt_disabledDays<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['disabledDays'] || ''
        ,anchor: '98%'
        ,listeners: oc
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_disabledDays<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('disabled_days_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'datefield'
        ,fieldLabel: _('earliest_date')
        ,description: MODx.expandHelp ? '' : _('earliest_date_desc')
        ,name: 'inopt_minDateValue'
        ,id: 'inopt_minDateValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['minDateValue'] || ''
        ,width: 200
        ,listeners: oc
        ,format: MODx.config.manager_date_format
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_minDateValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('earliest_date_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'timefield'
        ,fieldLabel: _('earliest_time')
        ,description: MODx.expandHelp ? '' : _('earliest_time_desc')
        ,name: 'inopt_minTimeValue'
        ,id: 'inopt_minTimeValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['minTimeValue'] || ''
        ,width: 200
        ,listeners: oc
        ,format: MODx.config.manager_time_format
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_minTimeValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('earliest_time_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'datefield'
        ,fieldLabel: _('latest_date')
        ,description: MODx.expandHelp ? '' : _('latest_date_desc')
        ,name: 'inopt_maxDateValue'
        ,id: 'inopt_maxDateValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['maxDateValue'] || ''
        ,width: 200
        ,listeners: oc
        ,format: MODx.config.manager_date_format
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_maxDateValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('latest_date_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'timefield'
        ,fieldLabel: _('latest_time')
        ,description: MODx.expandHelp ? '' : _('latest_time_desc')
        ,name: 'inopt_maxTimeValue'
        ,id: 'inopt_maxTimeValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['maxTimeValue'] || ''
        ,width: 200
        ,listeners: oc
        ,format: MODx.config.manager_time_format
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_maxTimeValue<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('latest_time_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'textfield'
        ,fieldLabel: _('start_day')
        ,description: MODx.expandHelp ? '' : _('start_day_desc')
        ,name: 'inopt_startDay'
        ,id: 'inopt_startDay<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['startDay'] || ''
        ,width: 100
        ,listeners: oc
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_startDay<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('start_day_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'textfield'
        ,fieldLabel: _('time_increment')
        ,description: MODx.expandHelp ? '' : _('time_increment_desc')
        ,name: 'inopt_timeIncrement'
        ,id: 'inopt_timeIncrement<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,value: params['timeIncrement'] || ''
        ,width: 100
        ,listeners: oc
    },{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_timeIncrement<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,html: _('time_increment_desc')
        ,cls: 'desc-under'
    },{
        xtype: 'combo-boolean'
        ,fieldLabel: _('hide_time')
        ,description: MODx.expandHelp ? '' : _('hide_time')
        ,name: 'inopt_hideTime'
        ,hiddenName: 'inopt_hideTime'
        ,id: 'inopt_hideTime<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
        ,width: 200
        ,value: (params['hideTime']) ? !(params['hideTime'] === 0 || params['hideTime'] === 'false') : false
        ,listeners: oc
    }]
    ,renderTo: 'tv-input-properties-form<?php echo (($tmp = @$_smarty_tpl->tpl_vars['tv']->value)===null||$tmp==='' ? '' : $tmp);?>
'
});
// ]]>
<?php echo '</script'; ?>
>

<?php }
}
