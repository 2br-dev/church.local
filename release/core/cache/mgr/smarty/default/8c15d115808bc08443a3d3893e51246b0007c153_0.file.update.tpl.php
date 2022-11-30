<?php
/* Smarty version 3.1.39, created on 2022-11-30 11:31:49
  from 'D:\Projects\Hosts\church.local\release\manager\templates\default\resource\symlink\update.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_638714f50b5544_33432550',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8c15d115808bc08443a3d3893e51246b0007c153' => 
    array (
      0 => 'D:\\Projects\\Hosts\\church.local\\release\\manager\\templates\\default\\resource\\symlink\\update.tpl',
      1 => 1622181878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_638714f50b5544_33432550 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="modx-panel-symlink-div"></div>
<div id="modx-resource-tvs-div" class="modx-resource-tab x-form-label-left x-panel"><?php echo (($tmp = @$_smarty_tpl->tpl_vars['tvOutput']->value)===null||$tmp==='' ? '' : $tmp);?>
</div>

<?php echo $_smarty_tpl->tpl_vars['onDocFormPrerender']->value;?>

<?php if ($_smarty_tpl->tpl_vars['resource']->value->richtext && $_smarty_tpl->tpl_vars['_config']->value['use_editor']) {?>
    <?php echo $_smarty_tpl->tpl_vars['onRichTextEditorInit']->value;?>

<?php }
}
}
