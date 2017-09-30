""" Created by andresilva on 12/23/15"""
from django import template
import markdown

register = template.Library()


@register.filter
def markdownify(text):
    """safe_mode governs how the function handles raw HTML"""
    return markdown.markdown(text, output_format="xhtml5")
