<?php
/* Smarty version 3.1.39, created on 2022-11-30 15:34:14
  from 'D:\Projects\Hosts\church.local\release\manager\templates\default\element\tv\renders\input\autotag.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_63874dc6279293_62286937',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '68c3ba9c16140d02ae6c9c84ee9ae40480575ce6' => 
    array (
      0 => 'D:\\Projects\\Hosts\\church.local\\release\\manager\\templates\\default\\element\\tv\\renders\\input\\autotag.tpl',
      1 => 1622181878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_63874dc6279293_62286937 (Smarty_Internal_Template $_smarty_tpl) {
?><input id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"
	type="text" class="textfield"
	value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->get('value'), ENT_QUOTES, 'UTF-8', true);?>
"
	<?php echo $_smarty_tpl->tpl_vars['style']->value;?>

	tvtype="<?php echo $_smarty_tpl->tpl_vars['tv']->value->type;?>
"
/>
<div id="tv-tags-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"></div>

<?php echo '<script'; ?>
>
// <![CDATA[

Ext.onReady(function() {
    var fld<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
 = MODx.load({
    
        xtype: 'textfield'
        ,applyTo: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,width: 400
        ,id: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,enableKeyEvents: true
        ,msgTarget: 'under'
        ,allowBlank: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 1 || $_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 'true') {?>true<?php } else { ?>false<?php }?>
    
        ,listeners: { 'keydown': { fn:MODx.fireResourceFormChange, scope:this}}
    });
    MODx.makeDroppable(fld<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
,function(v) {
        var tf = fld;
        if (tf) {
            var ov = tf.getValue();
            if (ov != '') {
                v = ','+v;
            }
        }
        return v;
    });
    Ext.getCmp('modx-panel-resource').getForm().add(fld<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
);
});

// ]]>
<?php echo '</script'; ?>
>

<ul class="modx-tag-list" id="tv-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-tag-list">
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['opts']->value, 'item', false, 'k', 'cbs', array (
));
$_smarty_tpl->tpl_vars['item']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->do_else = false;
?>
    <li class="modx-tag-opt<?php if ($_smarty_tpl->tpl_vars['item']->value['checked']) {?> modx-tag-checked<?php }?>" title="<?php echo $_smarty_tpl->tpl_vars['item']->value['value'];?>
"><?php echo $_smarty_tpl->tpl_vars['item']->value['value'];?>
</li>
<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
</ul>

<?php echo '<script'; ?>
>
// <![CDATA[

Ext.onReady(function() {
    Ext.select('#tv-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-tag-list li',true).on('click',function(e,i) {
        var li = Ext.get(i);
        if (!li) { return; }
        var tf = Ext.getCmp('tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
');
        var v = tf.getValue();
        if (li.hasClass('modx-tag-checked')) {
            tf.setValue(Ext.util.Format.trimCommas(v.replace(li.dom.title,'')));
            li.removeClass('modx-tag-checked');
        } else {
            v = v+(v != '' ? ',' : '');
            tf.setValue(Ext.util.Format.trimCommas(v+li.dom.title));
            li.addClass('modx-tag-checked');
        }
        MODx.fireResourceFormChange();
    });
    var p = Ext.getCmp('modx-panel-resource');
    if (p) {
        p.on('tv-reset',function(o) {
            if (o.id != '<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
') return;
            var df = Ext.get('tvdef'+o.id).dom.value;
            df = df.split(',');
            Ext.select('#tv-'+o.id+'-tag-list li',true).each(function(li,c,idx) {
                if (df.indexOf(li.dom.title) != -1) {
                    li.addClass('modx-tag-checked');
                } else {
                    li.removeClass('modx-tag-checked');
                }
            });
        });
    }
});

// ]]>
<?php echo '</script'; ?>
>
<?php }
}
